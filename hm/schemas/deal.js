import { defineType } from "sanity";


export default defineType({
    name:"deal",
    title: "Deals",
    type:"document",
    fields:[
        {
            name:"title",
            title: "Title",
            type:"string"
        },
        {
            name:"offer",
            title: "Offer",
            type:"string"
        },
        {
            name:"oldPrice",
            title: "OldPrice",
            type:"number"
        },
        {
            name:"price",
            title: "Price",
            type:"number"
        },
        {
            name:"image",
            title: "Image",
            type:"string"
        },
        {
            name:"carouseImage",
            title: "CarouseImage",
            type:"array",
            of:[{type:"string"}]
        },
        {
            name:"color",
            title: "Color",
            type:"string"
        },
        {
            name:"size",
            title: "Size",
            type:"string"
        }
    ]
})