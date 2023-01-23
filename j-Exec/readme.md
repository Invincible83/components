## j-Exec

The component executes a method when the user clicks on the same element with the `exec`, `exec2`, or `exec3` class. More information is below. The component is a singleton, and it works for the whole HTML document.

__Configuration__:
- `selector` is a selector for capturing `click` (default: `.exec`)
- `selector2` is a selector for capturing `dblclick` (default: `.exec2`)
- `selector3` is a selector for capturing `contextmenu` (default: `.exec3`)

__Elements__:

1. Elements can contain `data-exec` attribut with a method name which will be execute when the user click on the element.
2. Elements can contain these attributes `data-path="some.path` and `data-value="'STRING'"` or `data-value="340"` (number) or `data-value="{}"` (object). Clicking on the element sets `data-value` to `data-path`.
3. Elements can contain `data-href` attribute and the component performs `REDIRECT()`.

__Attributes__:

- `data-exec="METHOD_NAME"` executes a method when user clicks (supports scope via `?` char)
- `data-prevent="true"` prevents continuing in the `click` event
- `data-href="URL"` performs `REDIRECT()`
- `data-path="path.to.property"` a path for setting of value (supports scope via `?` char)
- `data-value=""` sets a value according to the `data-path=""` attribute
- `data-def="path.*"` performs default values (supports scope via `?` char)
- `data-reset="path.*"` performs a state reseting (supports scope via `?` char)

__Attributes for the double click__:

- `data-exec2="METHOD_NAME"` executes a method when user clicks (supports scope via `?` char)
- `data-prevent2="true"` prevents continuing in the `click` event
- `data-href2="URL"` performs `REDIRECT()`
- `data-path2="path.to.property"` a path for setting of value (supports scope via `?` char)
- `data-value2=""` sets a value according to the `data-path=""` attribute
- `data-def2="path.*"` performs default values (supports scope via `?` char)
- `data-reset2="path.*"` performs a state reseting (supports scope via `?` char)

__Attributes for the context-menu__:

- `data-exec3="METHOD_NAME"` executes a method when user clicks (supports scope via `?` char)
- `data-href3="URL"` performs `REDIRECT()`
- `data-path3="path.to.property"` a path for setting of value (supports scope via `?` char)
- `data-value3=""` sets a value according to the `data-path=""` attribute
- `data-def3="path.*"` performs default values (supports scope via `?` char)
- `data-reset3="path.*"` performs a state reseting (supports scope via `?` char)

__Hints__:

- toggles boolean `data-value="!value"`
- scopes: `data-path="?.name"` replaces `?` char with a scope path

__Good to know__:

- the component executes a target function in the form `function(element, event)`
- `data-exec=`, `data-exec2=`, `data-exec3=` can contain `@METHOD_NAME` that will be executed in the current component scope `component/METHOD_NAME(element, e)`


__NEW: Extensions__:

```js
SETTER('exec/register', function(exec, el, e, type) {

	// @exec {String} a value from data-exec
	// @el {jQuery element}
	// @e {Event}
	// @type {String} empty '': cick, '2': double-click '3': context menu
	// registers a new extension

	if (exec.charAt(0) === '/') {

		EXEC('myinstance.' + exec.substring(1), el, e);

		// "return true" stops the next processing of j-Exec
		return true;

	}

});
```

### Author

- Peter Širka <petersirka@gmail.com>
- [License](https://www.totaljs.com/license/)