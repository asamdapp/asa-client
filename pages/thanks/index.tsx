import React from "react";
import { Col, Container, Row } from "react-grid-system";

import { Button } from "components/UI";
import { MainLayout } from "layouts";
import { Link, useRouter } from "next-translate-routes";

const Thanks = () => {
  const { locales } = useRouter();

  // @ts-ignore
  return (
    <MainLayout>
      <Container>
        <Row>
          <Col>
            <h1>services</h1>
            <>
              <Link href="/">Current locale</Link>
              {/*@ts-ignore*/}
              {locales.map((locale) => (
                <Link
                  href={{
                    pathname: "/services",
                  }}
                  locale={locale}
                  key={locale}
                >
                  {locale} services
                </Link>
              ))}
            </>
            <div className="">
              <Button>button</Button>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            asperiores consequatur corporis cum cupiditate deserunt distinctio
            dolor dolorem dolores dolorum ea, eius error est explicabo harum
            ipsum laboriosam laudantium minima molestiae mollitia nisi nostrum
            nulla odio officia officiis omnis praesentium quasi quo suscipit
            tenetur ullam ut veritatis voluptate? Asperiores corporis eligendi
            fugit praesentium quasi. Adipisci asperiores culpa eaque harum
            libero nihil sint! Ab asperiores, blanditiis corporis culpa dolorem
            fugiat illum itaque, maiores mollitia nulla provident quam quas
            quidem rerum tempora totam voluptatem voluptates. Accusantium
            aliquid amet culpa delectus dicta dolorem eaque, enim eum
            exercitationem, fuga fugiat ipsa itaque nihil non omnis perferendis
            perspiciatis porro praesentium quam quo quos recusandae rerum
            sapiente veniam voluptates? Ad, architecto commodi deleniti
            distinctio dolorum ducimus ea earum eos eum eveniet expedita facere
            fugiat hic impedit in mollitia natus nesciunt nihil officiis quaerat
            quasi quia quisquam quo rem sequi sint temporibus tenetur totam unde
            veritatis? Assumenda dolorem laborum repudiandae sit. Eaque esse
            necessitatibus omnis possimus ratione vero. Accusantium, alias
            blanditiis eligendi explicabo harum illo ipsa magnam minima neque
            nobis repudiandae ullam? A asperiores aspernatur atque beatae
            corporis cumque dicta, eaque enim exercitationem expedita facilis
            impedit inventore laudantium libero magnam maiores natus
            necessitatibus, nisi perferendis provident quae quibusdam quidem
            quis repellat sed, soluta tempora vel vero vitae voluptas! A
            adipisci ex fugiat laudantium maxime quo ullam! Asperiores beatae
            debitis eaque eius facilis iure nemo, quod. Ad asperiores aspernatur
            atque consequuntur cumque debitis dolore dolorem eos fuga id illum
            ipsum, iure minus molestiae mollitia, numquam odit omnis placeat
            quae quam quas repellat sapiente sint tempora vero voluptas
            voluptatem? Amet at, itaque perferendis repellat sit soluta vitae?
            Ad architecto atque aut dolore doloremque eaque earum eveniet fugit
            in ipsum laboriosam laborum, modi, officiis praesentium ratione sed
            sint sunt tenetur velit vitae. Ab animi consectetur deserunt dolor
            enim est, exercitationem incidunt iste, iure iusto libero maxime
            molestias nam nulla officia perspiciatis quo recusandae soluta.
            Asperiores at est exercitationem ipsam iste, molestias provident
            rerum totam. Ab delectus nihil perferendis perspiciatis quaerat sit
            suscipit. Ad, autem consequuntur culpa cum eos incidunt iure
            laboriosam molestiae natus nulla quidem tempora, unde, voluptate! A
            aliquid atque deleniti dolores dolorum ducimus ea exercitationem
            facere in ipsa, labore maxime molestias nobis omnis reiciendis
            repudiandae sint sit ullam voluptas voluptatum! Ad alias laudantium
            sunt unde! Ipsa maxime nulla ratione vero? Atque error iure
            laudantium minima non nostrum optio tempore, velit! Cumque debitis
            dicta dolores dolorum esse impedit in ipsum iure laboriosam mollitia
            natus, nostrum odio odit perspiciatis quam vel voluptas. Aperiam
            aspernatur assumenda autem deserunt dolorem ducimus facere ipsa
            magni maxime nihil nostrum quasi quisquam, repellat saepe sunt
            suscipit, veritatis vitae. Autem esse et, eveniet nulla quaerat
            quasi quibusdam. Aut consequatur consequuntur, deleniti dolorem
            dolorum eos eum laboriosam maxime nam non officiis placeat quo rem
            tempora temporibus totam ut velit vero voluptate voluptates.
            Accusantium assumenda cum cumque dignissimos error esse eum,
            excepturi explicabo, facilis id itaque laboriosam nam natus nemo
            neque obcaecati quia quidem repellendus reprehenderit sit tenetur ut
            vel veritatis! Blanditiis culpa dolore dolores error illum libero,
            modi molestiae mollitia odio pariatur porro possimus quidem
            reprehenderit sunt vel. A aliquam aspernatur assumenda delectus
            deleniti distinctio dolorum eaque error exercitationem harum illum
            ipsam ipsum laudantium maiores modi officia placeat quasi quod,
            sequi tempore temporibus, tenetur veritatis vitae! Aspernatur
            debitis dolorum fugiat illo ipsam iure quam quasi quis quos sed!
            Blanditiis deserunt dolorem enim facere itaque sunt ullam velit
            vero! Dignissimos doloremque facilis harum quidem! Aperiam atque
            autem, commodi dolores fuga fugiat harum maiores optio praesentium
            sequi. Animi architecto at atque ducimus, enim hic inventore
            laboriosam molestias necessitatibus placeat possimus quidem,
            reiciendis repellendus veritatis, voluptatibus. Aliquam,
            consequuntur culpa distinctio dolorem dolorum facilis illo maxime,
            mollitia necessitatibus nulla quis quod voluptatem voluptates.
            Architecto aspernatur atque blanditiis culpa debitis dignissimos
            eius enim esse est et eum eveniet, in incidunt iste labore maxime
            mollitia non nulla obcaecati officiis omnis optio quae quas qui,
            quia recusandae rem rerum saepe suscipit, vero! At explicabo ipsam
            omnis voluptas? Ab dolor dolorum exercitationem hic in modi
            molestias porro quisquam repellendus tempore! Illum nostrum,
            recusandae. Ad ipsum nisi unde? Animi atque cum delectus, deleniti
            doloribus enim eos esse, exercitationem explicabo fugit incidunt
            iure iusto maxime minima modi mollitia nobis nostrum pariatur
            perferendis quae quam quasi quidem similique sunt tenetur velit
            vitae voluptatibus! Aliquid at esse fugit, maiores mollitia natus
            necessitatibus quod repellat suscipit velit. Animi consequuntur cum
            debitis delectus ex laudantium maiores molestias quaerat saepe sed.
            Aliquid animi cum dolor eos error fuga harum illo, in inventore
            laudantium maiores obcaecati officiis optio pariatur perspiciatis
            quidem quo temporibus, tenetur unde voluptatem. A dolorem error
            facere illo laborum maxime officia omnis quaerat quisquam quo quod
            sequi unde, ut voluptates voluptatum. Asperiores et explicabo
            facilis incidunt libero magni, neque numquam pariatur praesentium
            quibusdam ratione, repudiandae sint, sunt velit vitae voluptas
            voluptatem. Architecto dicta distinctio, dolore exercitationem
            explicabo omnis quod reprehenderit soluta unde voluptas? Accusamus,
            consectetur, eos. Ab alias aut cum dolorem hic iste labore mollitia
            nulla, rem sint sit, unde. Ad atque consequuntur dolores, dolorum
            eum eveniet, id in, laboriosam nam odit praesentium repellat soluta
            ullam vitae voluptatem! Consectetur fugiat itaque labore molestias
            quis! Corporis debitis harum illum maiores odit porro reprehenderit
            saepe sed sequi. Aliquid excepturi laudantium minus non! Aperiam
            atque doloremque, dolorum eaque molestiae pariatur placeat quam quia
            reiciendis sint ullam voluptatem, voluptates voluptatibus. Ab alias
            aut cumque delectus, dicta doloremque dolorum ex fugiat laborum
            laudantium magnam maxime molestiae, perspiciatis reiciendis
            similique? Architecto asperiores at beatae blanditiis, consequatur
            deleniti dolorem doloribus error explicabo facilis harum, in ipsam
            itaque maiores molestias nisi odit quae qui quo ratione repudiandae
            rerum saepe tempora ut vel! Adipisci aut consequuntur cum deserunt
            doloremque dolorum explicabo, in ipsam, libero molestias nemo porro
            quae quasi repellat tenetur unde voluptatibus! Blanditiis eius error
            et illum inventore iusto mollitia nihil repellat sint vitae!
            Distinctio eveniet necessitatibus nisi quis! Ad est necessitatibus
            neque nisi officia quasi quia reiciendis sequi voluptates. Aliquid
            architecto beatae consequatur error eum id, in ipsa labore laborum
            nihil nobis praesentium quis quod sapiente sed veniam voluptate. Ab
            dignissimos iure laboriosam non optio quaerat?
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};
export default Thanks;
