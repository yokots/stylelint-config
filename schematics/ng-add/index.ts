import {
  Rule, SchematicContext, Tree, SchematicsException,
  apply, branchAndMerge, mergeWith, template, renameTemplateFiles, url,
} from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { name, version, peerDependencies } from '../../package.json';

interface Dependencies {
  [key: string]: string;
}

function sortObjectByKeys(obj: Dependencies) {
  return Object.keys(obj).sort()
    .reduce<Dependencies>((result, key) => {
      result[key] = obj[key];
      return result;
    }, {});
}

export default function (): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const workspaceConfig = tree.read('/angular.json');
    if (!workspaceConfig) {
      throw new SchematicsException('Could not find Angular workspace configuration');
    }

    const pkg = JSON.parse(tree.read('/package.json')!.toString());
    pkg.scripts['lint:style'] = "stylelint src/**/*.scss --fix";
    pkg.scripts = sortObjectByKeys(pkg.scripts);
    pkg.devDependencies[name] = `^${version}`;
    pkg.devDependencies['stylelint'] = peerDependencies.stylelint;
    pkg.devDependencies = sortObjectByKeys(pkg.devDependencies);
    Reflect.deleteProperty(pkg.dependencies, name);
    tree.overwrite('/package.json', JSON.stringify(pkg, null, 2));

    if (tree.exists('/.stylelintrc.json')) {
      tree.delete('/.stylelintrc.json');
    }

    const templateSource = apply(url('./files'), [
      template({}),
      renameTemplateFiles(),
    ]);

    context.addTask(new NodePackageInstallTask());
    return branchAndMerge(mergeWith(templateSource));
  };
}
