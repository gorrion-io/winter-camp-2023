import { Viking } from "../../types";
import VikingCard from "../VikingCard";
import styles from "./VikingList.module.css";

interface Props {
  vikings: Viking[];
}

const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const images = [
  "/viking_background.jpg",
  "/viking_background2.jpg",
  "/viking_background3.jpg",
  "/viking_background4.jpg",
  "/viking_background5.jpg",
  "/viking_background6.jpg",
  "/viking_background7.jpg",
  "/viking_background8.jpg",
  "/viking_background9.jpg",
  "/viking_background10.jpg",
  "/viking_background11.jpg",
  "/viking_background12.jpg",
  "/viking_background13.jpg",
  "/viking_background14.jpg",
  "/viking_background15.jpg",
  "/viking_background16.jpg",
  "/viking_background17.jpg",
  "/viking_background18.jpg",
  "/viking_background19.jpg",
  "/viking_background20.jpg",
];

const getRandomImage = (images: string[]): string => {
  const randomInt = getRandomInt(0, images.length - 1);
  const randomImgSrc = images[randomInt];
  return randomImgSrc;
};

const getRandomImagesArray = (amount: number): string[] => {
  const imagesCopy = [...images];
  const result: string[] = [];
  for (let i = 0; i < amount; i++) {
    const randomImage = getRandomImage(imagesCopy);
    const randomImageIndex = imagesCopy.indexOf(randomImage);
    imagesCopy.splice(randomImageIndex, 1);
    result.push(randomImage);
  }

  return result;
};

export default function VikingList({ vikings }: Props) {
  const backgroundImages = getRandomImagesArray(vikings.length);

  return (
    <div className={styles.wrapper}>
      {vikings.map((viking, i) => (
        <VikingCard
          viking={viking}
          key={viking.fullName}
          backgroundImage={backgroundImages[i] ?? "/viking_background8.jpg"}
        />
      ))}
    </div>
  );
}
