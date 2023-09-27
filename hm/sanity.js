import { createClient } from "next-sanity";

export const client = createClient({
    projectId:"i8v34vg3",
    dataset:"production",
    useCdn:true,
    apiVersion:"2023-01-01",
    token:"skwqcay2WBk7RLkMy71yO2JKoFUCP5AH0CL0pMP1hOk6zV2xsSMZqYdd8ZM5Y6a7VhBk1XFCOg4dG6a9ybb4AEEhDBFJN5zpsDjo2GcpcMoDYFAIE8Qhby93vNWzoeyHkQ6QZ9aL9p9WLvrcyqD42rQu4KSqt86e8JzqTeLG3UjqSCCMq1bu",
})