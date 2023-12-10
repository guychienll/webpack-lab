import styles from "./base.module.css";

const root = document.createElement("div");

const header = document.createElement("div");
header.className = styles.header;
header.innerHTML = "this is a header";

root.appendChild(header);
document.body.appendChild(root);
