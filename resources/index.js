{
    let meta = document.createElement("meta");
    meta.setAttribute("charset", "UTF-8");
    document.head.append(meta);
}
{
    let base = document.createElement("base");
    base.href = "https://gosoccerboy5.github.io/blog/";
    document.head.append(base);
}
{
    let icon = document.createElement("link");
    icon.rel = "icon";
    icon.href = "resources/favicon.ico";
    document.head.append(icon);
}
{
    let stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.href = "resources/stylesheet.css";
    document.head.append(stylesheet);
}
{
    let homeLink = document.createElement("a");
    homeLink.href = "";
    homeLink.id = "home";
    homeLink.textContent = "Home";
    window.onload = function() {
        document.body.append(document.createElement("br"), document.createElement("br"), homeLink);
    };
}