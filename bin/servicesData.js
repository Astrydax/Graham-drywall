function Service(title, description, imgSrc) {
    this.title = title;
    this.description = description;
    this.imgSrc = imgSrc;
    return this;
}
export default [
    new Service(
        'Free estimates',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque suscipit libero, rutrum consequat nunc molestie in.',
        'images/free-estimates.png'
    ),
    new Service(
        'Water Damage Repair',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque suscipit libero, rutrum consequat nunc molestie in.',
        'images/water-damage-repair.png'
    ),
    new Service(
        'Additions to Existing Homes',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque suscipit libero, rutrum consequat nunc molestie in.',
        'images/additions-to-existing-homes.png'
    ),
    new Service(
        'Home Remodelling',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque suscipit libero, rutrum consequat nunc molestie in.',
        'images/home-remodelling.png'
    ),
    new Service(
        'New Construction',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pellentesque suscipit libero, rutrum consequat nunc molestie in.',
        'images/new-construction.png'
    )
]
