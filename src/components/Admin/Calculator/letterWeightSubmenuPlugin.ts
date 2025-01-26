/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
export const letterWeightSubmenu = {
  name: "letterWeight",
  display: "submenu",
  innerHTML:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.76 15.75"><g><path d="M6.4,3.76V19.5h6.76a5.55,5.55,0,0,0,2-.32,4.93,4.93,0,0,0,1.52-1,4.27,4.27,0,0,0,1.48-3.34,3.87,3.87,0,0,0-.69-2.37,5.74,5.74,0,0,0-.71-.83,3.44,3.44,0,0,0-1.1-.65,3.6,3.6,0,0,0,1.58-1.36,3.66,3.66,0,0,0,.53-1.93,3.7,3.7,0,0,0-1.21-2.87,4.65,4.65,0,0,0-3.25-1.1H6.4Zm2.46,6.65V5.57h3.52a4.91,4.91,0,0,1,1.36.15,2.3,2.3,0,0,1,.85.45,2.06,2.06,0,0,1,.74,1.71,2.3,2.3,0,0,1-.78,1.92,2.54,2.54,0,0,1-.86.46,4.7,4.7,0,0,1-1.32.15H8.86Zm0,7.27V12.15H12.7a4.56,4.56,0,0,1,1.38.17,3.43,3.43,0,0,1,.95.49,2.29,2.29,0,0,1,.92,2,2.73,2.73,0,0,1-.83,2.1,2.66,2.66,0,0,1-.83.58,3.25,3.25,0,0,1-1.26.2H8.86Z" transform="translate(-6.4 -3.75)"></path></g></svg>',
  title: "Set letter weight",
  add: function (core: any, targetElement: any) {
    const context = core.context;
    context.textStyle = {
      _styleList: null,
    };

    /** set submenu */
    let listDiv = this.setSubmenu(core);
    let listUl = listDiv.querySelector("ul");

    /** add event listeners */
    listUl.addEventListener("click", this.pickup.bind(core));

    context.textStyle._styleList = listDiv.querySelectorAll("li button");

    /** append target button menu */
    core.initMenuTarget(this.name, targetElement, listDiv);

    /** empty memory */
    (listDiv = null), (listUl = null);
  },

  setSubmenu: function (core: any) {
    const option = core.options;
    const listDiv = core.util.createElement("DIV");
    listDiv.className = "se-submenu se-list-layer se-list-format";

    const defaultList = {
      heavy: {
        name: "heavy",
        class: "__se__t-heavy",
        tag: "span",
      },
      extra: {
        name: "extra bold",
        class: "__se__t-extra-bold",
        tag: "span",
      },
      bold: {
        name: "bold",
        class: "__se__t-bold",
        tag: "span",
      },
      semi: {
        name: "semi bold",
        class: "__se__t-semi-bold",
        tag: "span",
      },
      medium: {
        name: "medium",
        class: "__se__t-medium",
        tag: "span",
      },
      normal: {
        name: "normal",
        class: "__se__t-normal",
        tag: "span",
      },
      light: {
        name: "light",
        class: "__se__t-light",
        tag: "span",
      },
    };
    const styleList = !option.textStyles
      ? core._w.Object.keys(defaultList)
      : option.textStyles;

    let list = '<div class="se-list-inner"><ul class="se-list-basic">';
    for (
      let i = 0,
        len = styleList.length,
        t,
        tag,
        name,
        attrs,
        command,
        value,
        _class;
      i < len;
      i++
    ) {
      t = styleList[i];
      (attrs = ""), (value = ""), (command = []);

      if (typeof t === "string") {
        // @ts-ignore
        const defaultStyle = defaultList[t.toLowerCase()];
        if (!defaultStyle) continue;
        t = defaultStyle;
      }

      name = t.name;
      tag = t.tag || "span";
      _class = t._class;

      if (t.style) {
        attrs += ' style="' + t.style + '"';
        value += t.style.replace(/:[^;]+(;|$)\s*/g, ",");
        command.push("style");
      }
      if (t.class) {
        attrs += ' class="' + t.class + '"';
        value += "." + t.class.trim().replace(/\s+/g, ",.");
        command.push("class");
      }

      value = value.replace(/,$/, "");

      list +=
        "<li>" +
        '<button type="button" class="se-btn-list' +
        (_class ? " " + _class : "") +
        '" data-command="' +
        tag +
        '" data-value="' +
        value +
        '" title="' +
        name +
        '" aria-label="' +
        name +
        '">' +
        "<" +
        tag +
        attrs +
        ">" +
        name +
        "</" +
        tag +
        ">" +
        "</button></li>";
    }
    list += "</ul></div>";

    listDiv.innerHTML = list;

    return listDiv;
  },

  /**
   * @Override submenu
   */
  on: function () {
    const util = (this as any).util;
    const textStyleContext = (this as any).context.textStyle;
    const styleButtonList = textStyleContext._styleList;
    const selectionNode = (this as any).getSelectionNode();

    for (
      let i = 0, len = styleButtonList.length, btn, data, active;
      i < len;
      i++
    ) {
      btn = styleButtonList[i];
      data = btn.getAttribute("data-value").split(",");

      for (let v = 0, node, value; v < data.length; v++) {
        node = selectionNode;
        active = false;

        while (node && !util.isFormatElement(node) && !util.isComponent(node)) {
          if (
            node.nodeName.toLowerCase() ===
            btn.getAttribute("data-command").toLowerCase()
          ) {
            value = data[v];
            if (
              /^\./.test(value)
                ? util.hasClass(node, value.replace(/^\./, ""))
                : !!node.style[value]
            ) {
              active = true;
              break;
            }
          }
          node = node.parentNode;
        }

        if (!active) break;
      }

      active ? util.addClass(btn, "active") : util.removeClass(btn, "active");
    }
  },

  pickup: function (e: any) {
    e.preventDefault();
    e.stopPropagation();

    let target = e.target;
    let command = null,
      tag = null;

    while (!command && !/UL/i.test(target.tagName)) {
      command = target.getAttribute("data-command");
      if (command) {
        tag = target.firstChild;
        break;
      }
      target = target.parentNode;
    }

    if (!command) return;

    const checkStyles = tag.style.cssText.replace(/:.+(;|$)/g, ",").split(",");
    checkStyles.pop();

    const classes = tag.classList;
    for (let i = 0, len = classes.length; i < len; i++) {
      checkStyles.push("." + classes[i]);
    }

    const newNode = (this as any).util.hasClass(target, "active")
      ? null
      : tag.cloneNode(false);
    const removeNodes = newNode ? null : [tag.nodeName];
    (this as any).nodeChange(newNode, checkStyles, removeNodes, true);

    (this as any).submenuOff();
  },
};
