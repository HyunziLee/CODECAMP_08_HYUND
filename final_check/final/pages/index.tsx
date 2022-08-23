import Head from "next/head";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../src/commons/store";
import MainContainer from "../src/components/units/board/main/main.container";
import styles from "../styles/Home.module.css";

export default function Home() {
  return <MainContainer />;
}
