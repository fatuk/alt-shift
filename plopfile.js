export default function (plop) {
  plop.setWelcomeMessage("Pick one to generate:");

  plop.setGenerator("component", {
    description: "Create component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name in PascalCase",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.module.css",
        templateFile: "plop-templates/Component.module.css.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.ts",
        templateFile: "plop-templates/Component.index.ts.hbs",
      },
    ],
  });
}
