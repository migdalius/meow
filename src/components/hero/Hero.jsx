import { Link } from "react-router-dom";
import styled from "styled-components";

const MainContainer = styled.section`
  display: flex;
  height: 90vh;
`;

const LeftContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MidContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
`;

const ChoseContainer = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
  background-color: #fff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 10px;
  z-index: 1;
`;

const ItemDog = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin: 10px;
`;

const SingleItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 280px;
  height: 80%;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  cursor: pointer;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`;

const ItemCat = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin: 10px;
`;

const RightContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainImage = styled.img`
  width: 400px;
  @media (max-width: 1575px) {
    width: 350px;
  }
`;

const CatImg = styled.img`
  width: 220px;
`;

const SecondTitle = styled.h2`
  padding-top: 20px;
  font-size: 30px;
`;

const DogContainer = styled.div`
  position: absolute;
  z-index: 999;
`;

const Circle = styled.div`
  width: 350px;
  height: 350px;
  border: 28px dotted #08284a;
  border-radius: 50%;
  position: relative;
  left: 100px;
  flex-direction: column;
  margin-right: 15px;
  @media (max-width: 1875px) {
    width: 300px;
    height: 300px;
    left: 80px;
  }

  @media (max-width: 1575px) {
    width: 300px;
    height: 300px;
    left: -25px;
  }
`;

const ThirdCircle = styled.div`
  width: 350px;
  height: 350px;
  border: 12px dotted #08284a;
  border-radius: 50%;
  position: absolute;
  bottom: 200px;
`;

const MainTitle = styled.h1`
  font-size: 36px;
`;
const Hero = () => {
  return (
    <MainContainer>
      <LeftContainer>
        <DogContainer>
          <MainImage src="https://html.merku.love/petopia/assets/images/banner/cat_img_2.png" />
        </DogContainer>
        <Circle />
        {/* <SecondCircle /> */}
      </LeftContainer>

      <MidContainer>
        <Title>
          <MainTitle>
            Wybierz idealnie dopasowaną karmę dla swojego pupila
          </MainTitle>
        </Title>
        <ChoseContainer>
          <ItemDog>
            <Link
              to="/krok-1"
              style={{ textDecoration: "none", color: "black" }}
            >
              <SingleItem>
                <SecondTitle>Pies</SecondTitle>
                <CatImg src="https://www.szybkauprawa.pl/img/kot.png" />
              </SingleItem>
            </Link>
          </ItemDog>

          <ItemCat>
            <Link
              to="/krok-1"
              style={{ textDecoration: "none", color: "black" }}
            >
              <SingleItem>
                <SecondTitle>Kot</SecondTitle>
                <CatImg src="https://www.szybkauprawa.pl/img/kot.png" />
              </SingleItem>
            </Link>
          </ItemCat>
        </ChoseContainer>
      </MidContainer>
      <RightContainer>
        <DogContainer>
          <MainImage src="https://html.merku.love/petopia/assets/images/banner/cat_img_1.png" />
        </DogContainer>
        <ThirdCircle />
      </RightContainer>
    </MainContainer>
  );
};

export default Hero;
