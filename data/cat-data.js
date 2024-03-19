
function Animal(name, type, food, size, description) { 
    this.name = name,
    this.type = type,
    this.food = food,
    this.size = size,
    this.description = description
}

export const catData = {
    pageTitle: "Cat Page!",
    mainHeader: "SERVE YOUR FELINE OVERLORDS!!!",
    textContent: "Cats, are the supreme being of your universe just so you know."
}

export const catList = [
    new Animal("Siamese", "High-quality cat food", "Thailand", "Medium", "Sleek, short-haired cats known for their striking blue almond-shaped eyes and color-point fur pattern. They are vocal, affectionate, and enjoy social interaction."),
    new Animal("Persian", "Specialized cat food for long-haired breeds", "Iran (formerly Persia)", "Medium to large", "Long-haired and distinctive flat-faced cats with a calm and gentle demeanor. They require regular grooming due to their luxurious coats."),
    new Animal("Bengal", "High-protein cat food", "United States (developed from Asian leopard cat hybrids)", "Medium", "Sleek, spotted or marbled coat resembling a wild leopard. Bengals are active, playful, and known for their love of climbing."),
    new Animal("Sphynx", "High-energy cat food", "Canada", "Small to medium", "Hairless cats known for their wrinkled skin, large ears, and lively personalities. Despite their lack of fur, they require regular bathing to maintain skin health."),
    new Animal("Ragdoll", "Balanced cat diet", "United States", "Large", "Known for their placid temperament and tendency to go limp when picked up, Ragdolls have semi-longhair coats with striking color patterns."),
    new Animal("Abyssinian", "High-quality cat food", "Ethiopia (formerly Abyssinia)", "Small to medium", "Short-haired cats with a ticked coat, giving them a unique agouti appearance. Abyssinians are playful, active, and often described as 'busy' cats."),
];
