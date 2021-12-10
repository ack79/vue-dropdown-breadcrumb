# Trello Board and Roadmap
[Trello Board](https://trello.com/invite/b/aCemQkvR/28f2c73cf4cd7d5c77d8a23564fc81ed/vue-dropdown-breadcrumb)

# vue-dropdown-breadcrumb
A breadcrumb library with dropdown option

**Expexted params format**
```
[
	{
		label: String
		link: String
		isDropdown: Boolean,
		list: Array,
	},
	{
		label: String,
		isDropdown: Boolean,
		list: [
			{
				label: String,
				link: String,
			},
		],
	},
]
```