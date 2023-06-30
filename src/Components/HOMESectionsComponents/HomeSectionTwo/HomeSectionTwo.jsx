import React from "react";

import { AnimationBtn } from "components/animationBtn/AnimationBtn";

import styles from "./homeSectionTwo.module.scss";

export const HomeSectionTwo = () => {
  return (
    <div className={styles.home_section_two}>
      <h1>O nama</h1>
      <p>
        Jedinstveno mjesto u centru Zagreba gdje možete vidjeti kako nastaje
        nakit u našem otvorenom zlatarskom ateljeu. Naš vrhunski i iskusni
        majstor zlatar-graver pretvara vaše ideje, želje u jedinstvene i
        personalizirane komade vrhunskog nakita. Opustite se i obratite nam se s
        povjerenjem. Biseri, dijamanti, smaragdi, safiri, rubini... malo zlata i
        Vaši snovi postaju stvarni u našoj radionici. U našoj ponudi također
        imamo veliki izbor francuskih antikviteta te vršimo usluge restauracije
        namještaja. Zidove našeg prostora krase umjetničke slike renomiranih
        hrvatskih slikara poput{" "}
        <i>
          M. C. Crnčića, S. Raškaj, T. Krizmana, M. C. Medovića, R. Auera ...
        </i>{" "}
        Sve se slike prodaju s ekspertizama eminentnih povjesničara umjetnosti.
        Kod nas možete procijeniti Vaš nakit i druge vrijednosti. Vrijedne ruke
        naših majstora zlatara, gravera, fasera, restauratora, tapetara i
        povjesničara te iskreni i topli osmjeh Vas čekaju u centru Zagreba,
        Praška 10.
      </p>
      <AnimationBtn name={"Usluge"} path={"./usluge"} color={"btn-anim-gold"} />
    </div>
  );
};
