
onload = onLoadFunctions;


function onLoadFunctions() {
  const context = { title: "My New Post", body: "This is my first post!" };
  hbsCompiler("hbs-template", context);
}

hbsCompiler = (element, variables) => {
  let hbsSource = document.getElementById(element);
  const hbsCompiled = Handlebars.compile(hbsSource.innerHTML);
  const html = document.createElement('div');
  html.innerHTML = hbsCompiled(variables);
  hbsSource.replaceWith(html);
}