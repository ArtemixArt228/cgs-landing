/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
export const letterCaseSubmenu = {
  name: "letterCase",
  display: "submenu",
  innerHTML:
    '<svg width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.792 7.08H2.256L1.428 9H0.12L3.888 0.599999H5.232L9 9H7.62L6.792 7.08ZM6.324 5.976L4.536 1.836L2.736 5.976H6.324ZM15.4892 4.716C15.8812 4.924 16.1772 5.192 16.3772 5.52C16.5772 5.84 16.6772 6.208 16.6772 6.624C16.6772 7.08 16.5692 7.488 16.3532 7.848C16.1452 8.2 15.8372 8.48 15.4292 8.688C15.0212 8.896 14.5332 9 13.9652 9H10.1972V0.599999H13.9532C14.4972 0.599999 14.9652 0.7 15.3572 0.9C15.7492 1.1 16.0452 1.372 16.2452 1.716C16.4532 2.06 16.5572 2.448 16.5572 2.88C16.5572 3.28 16.4692 3.636 16.2932 3.948C16.1172 4.26 15.8492 4.516 15.4892 4.716ZM13.8932 4.272C14.3732 4.272 14.7332 4.16 14.9732 3.936C15.2212 3.704 15.3452 3.372 15.3452 2.94C15.3452 2.116 14.8612 1.704 13.8932 1.704H11.3972V4.272H13.8932ZM13.9052 7.896C14.4012 7.896 14.7772 7.784 15.0332 7.56C15.2892 7.336 15.4172 7.008 15.4172 6.576C15.4172 6.16 15.2892 5.848 15.0332 5.64C14.7772 5.424 14.4012 5.316 13.9052 5.316H11.3972V7.896H13.9052Z" fill="black"/></svg>',
  title: "Set letter case",
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
      upper: {
        name: "AB",
        class: "__se__t-upper",
        tag: "span",
      },
      firstletter: {
        name: "Ab",
        class: "__se__t-first-letter-capitalize",
        tag: "span",
      },
      lower: {
        name: "ab",
        class: "__se__t-lower",
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
