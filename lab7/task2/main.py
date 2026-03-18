from models import Animal, Dog, Cat


def main():
    animal1 = Animal("Buddy", 5, "Brown")
    dog1 = Dog("Rocky", 3, "Black", "Labrador")
    cat1 = Cat("Mimi", 2, "White", 9)

    animals = [animal1, dog1, cat1]

    for animal in animals:
        print(animal)
        print(animal.eat())
        print(animal.speak())
        print()

    print(dog1.run())
    print(cat1.climb())


if __name__ == "__main__":
    main()