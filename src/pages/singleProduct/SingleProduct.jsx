import styled, { keyframes } from "styled-components";
import Footer from "../../components/footer/Footer";
import Navigation from "../../components/nav/Navigation";
import { ExclamationCircle } from "react-bootstrap-icons";

const MainContainer = styled.div`
  background-image: url("http://localhost:3000/img/bg.jpg");
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
  padding-top: 30px;
`;

const Content = styled.div`
  display: flex;
  width: 1200px;
  height: auto;
  gap: 20px;
`;

const Filter = styled.div`
  width: 30%;
  height: 700px;
  background-color: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border: 1px solid #ddd;
`;

const Products = styled.div`
  width: 70%;
  height: auto;
  background-color: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border: 1px solid #ddd;
  margin-bottom: 20px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const ImageTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  padding-top: 20px;
`;

const ImageSlider = styled.img`
  width: 500px;
  height: 500px;
`;

const ImageSliderContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;
const SingleImageSlider = styled.img`
  width: 120px;
  height: 120px;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
`;

const Line = styled.hr`
  margin-left: 5%;
  margin-right: 5%;
  width: 90%;
  border: none;
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const ProducerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px;
`;

const ProducerName = styled.h3`
  font-size: 20px;
  font-weight: 700;
`;

const ProducerLogo = styled.img`
  width: 90px;
  height: 75px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const PriceContainer = styled.div`
  margin: 15px;
`;
const PriceContainerTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 20px;
`;

const Price = styled.h3`
  font-size: 24px;
  color: #222;
  margin-bottom: 5px;
`;

const NetPrice = styled.p`
  font-size: 12px;
`;

const DevileryTime = styled.p`
  font-size: 16px;
  margin: 15px;
`;

const DeliveryContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CompositionContainer = styled.div`
  margin: 15px;
`;

const CompositionTitle = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const CompositionList = styled.ul``;

const CompositionListItem = styled.li`
  margin-bottom: 3px;
  list-style: none;
`;

const SummaryContainer = styled.div``;

const QuantityContainer = styled.div`
  margin: 15px;
`;

const QuantityInput = styled.input`
  width: 40px;
  height: 35px;
  border: 1px solid #ddd;
`;

const SummaryButton = styled.button`
  background-color: #08284a;
  margin-left: 5%;
  margin-right: 5%;
  width: 90%;
  height: 45px;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
`;

const Desc = styled.p`
  margin: 15px;
`;

const Composition = styled.p`
  margin-bottom: 20px;
  margin: 15px;
`;
const SingleProduct = () => {
  return (
    <>
      <Navigation />
      <MainContainer>
        <Content>
          <Products>
            <ImageContainer>
              <ImageTitle>Mokra karma dla psa Rafi Classic 500 g</ImageTitle>
              <ImageSlider src="../img/products/product.jpg" />
            </ImageContainer>
            <ImageSliderContainer>
              <SingleImageSlider src="../img/products/miniatura.jpg" />
              <SingleImageSlider src="../img/products/miniatura.jpg" />
              <SingleImageSlider src="../img/products/miniatura.jpg" />
              <SingleImageSlider src="../img/products/miniatura.jpg" />
            </ImageSliderContainer>
            <Line />
            <ImageContainer>
              <ImageTitle>Opis Produktu</ImageTitle>
              <Desc>
                Karma odpowiednia dla ka??dej rasy m.in. Airedale terrier, Akita
                ameryka??ska, Akita Inu,Alaskan malamute, Alpejski go??czy
                kr??tkono??ny, American staffordshire terrier, Basset, Beagle,
                Bearded collie, Bernardyn, Berne??ski pies pasterski, Owczarek
                szwajcarski, Bloodhound, Bokser, Bolo??czyk, Border collie,
                Border terrier, Boston terrier, Buhund norweski, Buldog,
                Bulterier, Cane corso, Chart polski, Chihuahua, Chin japo??ski,
                Chow chow, Cocker spaniel ameryka??ski, Dalmaty??czyk, Doberman
                ,Dog argenty??ski, Szwajcarski pies pasterski, Foksterier,
                Foxhound ameryka??ski ,Golden retriever, Go??czy austriacki, Grand
                basset, Husky, Irlandzki spaniel dowodny, Jack russel terrier,
                Jamnik, Labrador retriever, ??ajka zachodniosyberyjska, Mastif,
                Mops, Niemiecki terier my??liwski, Ogar polski, Owczarek,
                Rottweiler, Samoyed (samojed), Seter, Shiba inu, Spaniel,
                Sznaucer, Terier, Wy??e??, Yorkshire terrier
              </Desc>
              <Composition>
                <strong>SK??AD:</strong> Zbo??a, mi??so i produkty odzwierz??ce,
                oleje i t??uszcze, produkty ro??linne, substancje mineralne,
                dro??dze.
              </Composition>
              <Composition>
                <strong>SK??AD ANALITYCZNY:</strong> Bia??ko surowe: 32%, T??uszcz
                surowy: 15%; W????kna: 3,5%; Popi????: 10%; Wilgotno????: 10%.
              </Composition>
              <Composition>
                <strong>DODATKI:</strong> Witaminy, prowitaminy lub zwi??zki
                chemiczne o analogicznym dzia??aniu. Wit. A: 19,600 UI; Wit. D3:
                1680 UI; Wit. E (alfa-tokoferole): 84 UI; Wit. K: 0,32 mg; Wit.
                B1: 1,23 mg; Wit. B2: 1,58 mg; Wit. B6 (chlorowodorek
                piroksydyny): 1,47 mg, Wit. B12: 28 mcg; Niacynamid: 4,2 mg,
                Kwas pantotenowy: 5,48 mg; Kwas foliowy: 0,44 mg; Biotyna: 70
                mcg
              </Composition>
            </ImageContainer>
          </Products>

          <Filter>
            <ProducerContainer>
              <ProducerName>Dolina Noteci</ProducerName>
              <ProducerLogo src="https://www.dolina-noteci.pl/data/include/cms/dn_filtr/logotypy/dn.png" />
            </ProducerContainer>
            <Line />
            <PriceContainer>
              <PriceContainerTitle>
                Divinus Performance DLA OWCZARKA 42% mi??sa 20kg
              </PriceContainerTitle>
              <Price>145,00 z??</Price>
              <NetPrice>134,26 z?? netto, 8% VAT</NetPrice>
            </PriceContainer>
            <Line />
            <DeliveryContainer>
              <DevileryTime>Dostawa od 2 do 4 dni</DevileryTime>
              <ExclamationCircle color="#000" size={18} />
            </DeliveryContainer>
            <Line />
            <CompositionContainer>
              <CompositionTitle>Sk??ad karmy</CompositionTitle>
              <CompositionList>
                <CompositionListItem>Kalorie: 341 kcal</CompositionListItem>
                <CompositionListItem>Bia??ko: 28 %</CompositionListItem>
                <CompositionListItem>T??uszcz: 10 %</CompositionListItem>
                <CompositionListItem>Popi???? surowy: 10 %</CompositionListItem>
                <CompositionListItem>W????kno surowe: 10 %</CompositionListItem>
                <CompositionListItem>
                  Wilgotno???? karmy: 9.5 %
                </CompositionListItem>
              </CompositionList>
            </CompositionContainer>
            <Line />
            <SummaryContainer>
              <QuantityContainer>
                <QuantityInput placeholder="+" />
                <QuantityInput />
                <QuantityInput placeholder="-" />
              </QuantityContainer>
              <SummaryButton>DODAJ DO KOSZYKA</SummaryButton>
            </SummaryContainer>
          </Filter>
        </Content>
      </MainContainer>
      <Footer />
    </>
  );
};

export default SingleProduct;
