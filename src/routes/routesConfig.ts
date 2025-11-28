const context = import.meta.glob('../pages/**/page.tsx', { eager: true });

const pages = Object.keys(context).map((path) => {
  const module: any = context[path];

  if (!module?.default) {
    console.warn(`Arquivo sem default export encontrado: ${path}`);
    return null;
  }

  const segments = path.split('/');

  const fileName = segments.pop(); // page.tsx
  const folderName = segments.pop(); // nome da pasta

  return {
    folderName,
    fileName,
    value: module.default,
  };
}).filter(Boolean);

// Exporta rotas
export default pages.map((page) => {
  const path = page?.folderName
    ? `/${page.folderName.toLowerCase()}`
    : '/';

  return {
    path,
    component: page?.value,
  };
});
