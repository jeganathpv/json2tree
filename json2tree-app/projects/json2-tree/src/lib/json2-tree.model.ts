
export interface JsonNode {
    key: string,
    value: any,
    content: string,
    isExpanded: boolean,
    datatype: JsonNodeType
}

export enum JsonNodeType {
    Node, // Default value
    Array,
    Object
}