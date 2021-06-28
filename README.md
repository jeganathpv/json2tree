# Ngx-JSON-Tree
## JSON data to Tree View

This library is mainly created to easily visualize JSON data/string into Object tree.
It was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.5.

## Installation

`npm install json2-tree`

To save this in dependencies:
`npm install json2-tree --save`

## Usage

In your parent module, Import `Json2TreeModule`

```html
@NgModule({
  ...,
  imports: [
    ...,
    Json2TreeModule,
    ...
  ],
  ...
})
export class AppModule { }
```

In your component:
`<json2-tree [data]="data"></json2-tree>`

To expand all nodes:
`<json2-tree [data]="data" [expandAllNodes]=true></json2-tree>`

To expand only 2 levels:
`<json2-tree [data]="data" [expandLevel]=2></json2-tree>`

## Example

An example for this project can be found at [github-pages](https://github.com/jeganathpv/json2tree) of this repository 

## Properties

Name | Type | Default | Description
----|----|----|----
data|any|null| JSON Object or string to display
expandAllNodes|boolean| false| Set this to `true` to expand all the nodes(If available)
expandLevel|number|-1|To expand nodes for given levels
separator|string|:|To change the separator
style|any|null|Inline style of the component

## Styles Used
Name|Element
----|----
jtree-node| Node element
jnode-toggler| Toggle element
jnode-key| Node key element
jnode-separator| Separator element
jnode-value| Node value element
child-jnode| Children (or) Nested Node element

## Dependencies
None.

## Changelog

> v1.0.0

- Initial Release

## Development

Want to contribute? Great!

Make a change in your file and instantaneously see your updates!

## Credits
A credit to [JSON formatter](https://jsonformatter.org/) where I got the idea to develop this.

## Further help

To get more on this, go and check out the [json2-tree](https://github.com/jeganathpv/json2tree) github page.

### Reach out to me
> [Jeganath PV](https://jeganathpv.github.io/)

*Thank you!*

