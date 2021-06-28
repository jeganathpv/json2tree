import { Component, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { JsonNode, JsonNodeType } from './json2-tree.model';

@Component({
  selector: 'json2-tree',
  templateUrl: './json2-tree.component.html',
  styleUrls: ['./json2-tree.component.scss']
})
export class Json2TreeComponent implements OnChanges {

  @Input() data: any;

  @Input() expandAllNodes: boolean = false;

  @Input() expandLevel: number = -1;

  @Input() _currentLevel: number = -1;

  @Input() separator: string = ':'

  @Input() style: any;

  expand: boolean = false;

  nodes: Array<JsonNode> = [];

  ngOnChanges(): void {
    this.nodes = [];
    this._currentLevel++;

    this.expand = this.expandLevel > -1;

    this.parseToJson();
    this.addJsonNodes();
  }

  /**
   * To parse data if input JSON is in string type
   */
  parseToJson() {
    if (typeof this.data === 'string') {
      this.data = JSON.parse(this.data);
    }
  }

  addJsonNodes() {
    Object.keys(this.data).forEach(key => {
      this.nodes.push(this.buildNode(key, this.data[key]));
    });
  }

  buildNode(key: string, value: any): JsonNode {
    let node: JsonNode = {
      key: key,
      value: value,
      content: value,
      isExpanded: false,
      datatype: JsonNodeType.Node
    }
    node.isExpanded = this.checkNodeIsExpanded(node);
    if (typeof value === 'object') {
      if (Array.isArray(value)) {
        node.content = `[${value.length}]`;
        node.datatype = JsonNodeType.Array;
        node.isExpanded = this.checkNodeIsExpanded(node);
      } else if (!value) {
        node.content = 'null';
      } else {
        node.content = `{${Object.keys(value).length}}`;
        node.datatype = JsonNodeType.Object;
        node.isExpanded = this.checkNodeIsExpanded(node);
      }
    }

    return node;
  }

  checkNodeIsExpanded(node: JsonNode): boolean {
    if(this.expandAllNodes){
      return true;
    }
    return this.expand && !(this.expandLevel > -1 && this._currentLevel >= this.expandLevel);
  }

  isNodeExpandable(node: JsonNode): boolean {
    return node.datatype !== JsonNodeType.Node;
  }

  toggleNode($event: MouseEvent, node: JsonNode) {
    node.isExpanded = !node.isExpanded;
    $event.stopPropagation();
  }

}
