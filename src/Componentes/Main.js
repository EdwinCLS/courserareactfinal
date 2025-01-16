import styles from "../Componentes/CSS/Main.module.css";
import food from "../imagenes/restauranfood.jpg";
import bruchetta from "../imagenes/bruchetta.png";
import lemon from "../imagenes/lemon dessert.jpg";
import salad from "../imagenes/greek salad.jpg";
import React from "react";
import heroone from "../imagenes/hero1.webp";
import herotwo from "../imagenes/hero2.webp";
import herothree from "../imagenes/hero3.jpg";
import chefs from "../imagenes/Mario and Adrian A.jpg";
import chef from "../imagenes/restaurant chef B.jpg";
import place from "../imagenes/restaurant.jpg";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Image,
  Button,
  Divider,
  CardFooter,
  ButtonGroup,
  SimpleGrid,
  CardHeader,
} from "@chakra-ui/react";
import { StarIcon, EmailIcon, PhoneIcon, ChatIcon } from "@chakra-ui/icons";

function Main() {
  return (
    <>
      <div className={styles.contenedor}>
        <div className={styles.contenedor.izquierdAa}>
          <h1 className={styles.header}> Little Lemon</h1>
          <h2 className={styles.subheader}>Chicago</h2>
          <p className={styles.text}>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>

          <Link to="/BookingPage" className={styles.boton}>
            Reserve table
          </Link>
        </div>
        <img className={styles.imagen} src={food} alt="food" />{" "}
      </div>
      <div className={styles.principal}>
        <section className={styles.seccion}>
          <h1>This week specials!!</h1>
          <button className={styles.botonContenido}> Go to order</button>
        </section>
        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(300px,1fr))"
        >
          <Card maxW="sm">
            <CardBody>
              <Image
                src={bruchetta}
                alt="Green double couch with wooden legs"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Bruchetta</Heading>
                <Text>
                  Our bruchetta is made from grilled bread that has been smeared
                  with garlic and seasoned with salt and olive oil
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  $5.99
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="1">
                <Button className={styles.botonContenido}>
                  Order a delivery
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image src={salad} alt="Greek salad" borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Heading size="md">Greek salad</Heading>
                <Text>
                  The famous greek salad of crispy lettuce, peppers, olives and
                  our Chicago style tota cheese, gasnished with crunchy garlic
                  and rosemary croutons
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  $12.99
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button className={styles.botonContenido}>
                  Order a delivery
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image src={lemon} alt="Lemon deser" borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Heading size="md">Lemon Desert</Heading>
                <Text>
                  This comes from grandma recipe book, every last ingredient has
                  been sourced and is an authentic as can be imagened
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  $5.00
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button className={styles.botonContenido}>
                  Order a delivery
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </SimpleGrid>
        <h1
          style={{
            fontSize: "1.6rem",
            color: "black",
            padding: ".5rem",
            fontWeight: "bolder",
          }}
        >
          Testimonials
        </h1>
        <section className={styles.people}>
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          >
            <Card className={styles.resena}>
              <CardHeader>
                <Image
                  borderRadius="full"
                  boxSize="150px"
                  src={heroone}
                  alt="person one"
                />
              </CardHeader>
              <CardBody>
                <Text>
                  I visited this restaurant with a few friends, and I must say,
                  it exceeded all of our expectations. The food was simply
                  outstanding! We started with the appetizers, and the
                  bruschetta was a perfect balance of crunchy bread and
                  flavorful toppings.
                </Text>
              </CardBody>
              <CardFooter>
                <StarIcon color="yellow.400" w="20px" h="20px" />
                <StarIcon color="yellow.400" w="20px" h="20px" />
                <StarIcon color="yellow.400" w="20px" h="20px" />
                <StarIcon color="yellow.400" w="20px" h="20px" />
                <StarIcon color="yellow.400" w="20px" h="20px" />
              </CardFooter>
            </Card>
            <Card className={styles.resena}>
              <CardHeader>
                <Image
                  borderRadius="full"
                  boxSize="150px"
                  src={herotwo}
                  alt="person two"
                />
              </CardHeader>
              <CardBody>
                <Text>
                  I recently had dinner at this place, and while the food was
                  mostly good, I feel there's still room for improvement. I
                  ordered the steak, and while it was cooked well, it lacked
                  seasoning, which made it a bit bland for my taste. The side
                  dishes, like the mashed potatoes and roasted vegetables, were
                  delicious though.
                </Text>
              </CardBody>
              <CardFooter>
                <StarIcon color="yellow.400" w="20px" h="20px" />
                <StarIcon color="yellow.400" w="20px" h="20px" />
                <StarIcon color="yellow.400" w="20px" h="20px" />
                <StarIcon color="yellow.400" w="20px" h="20px" />
                <StarIcon color="yellow.400" w="20px" h="20px" />
              </CardFooter>
            </Card>
            <Card className={styles.resena}>
              <CardHeader>
                <Image
                  borderRadius="full"
                  boxSize="150px"
                  src={herothree}
                  alt="person three"
                />
              </CardHeader>
              <CardBody>
                <Text>
                  I have mixed feelings about this restaurant. The food was
                  amazing!The bruchetta was the perfect side. However, the
                  service was subpar. It took forever for our server to bring
                  drinks and the main course, which was frustrating.
                </Text>
              </CardBody>
              <CardFooter>
                <StarIcon color="yellow.400" w="20px" h="20px" />
                <StarIcon color="yellow.400" w="20px" h="20px" />
                <StarIcon color="yellow.400" w="20px" h="20px" />
                <StarIcon color="yellow.400" w="20px" h="20px" />
              </CardFooter>
            </Card>
          </SimpleGrid>
        </section>
        <article className={styles.subpie}>
          <div>
            <h1 className={styles.header}>Little Lemon</h1>
            <h1 className={styles.subheader}>Chicago</h1>
            <p
              style={{ color: "black", textAlign: "left", fontSize: "1.2rem" }}
            >
              Litlle lemon is a family restaurant. Every recipe is from grandma
              book.{" "}
            </p>
          </div>
          <div className={styles.imagRes}>
            <img src={chef} alt="chef cocinando" />
            <img src={chefs} alt="chef platicando" />
          </div>
        </article>
        <footer className={styles.primary}>
          <img src={place} alt="place" />

          <ul className={styles.list}>
            <li>
              <a>Contact info</a>
              <ul>
                <ol className={styles.listItem}>
                  <EmailIcon className={styles.icon} />
                  <p>littleLemon@hotmail.com</p>
                </ol>
                <ol className={styles.listItem}>
                  <PhoneIcon className={styles.icon} />
                  <p>53-576-97</p>
                </ol>
                <ol className={styles.listItem}>
                  <ChatIcon className={styles.icon} />
                  <p>+52 951-150-1876</p>
                </ol>
              </ul>
            </li>
            <li>
              <a>Social links</a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}

export default Main;
