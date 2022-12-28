import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Navigation from "../../components/nav/Navigation";
import Product from "../../components/product/Product";

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
  width: 1400px;
  height: auto;
  gap: 20px;
`;

const Filter = styled.div`
  width: 30%;
  height: 800px;
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
`;

const ProductNavigation = styled.div`
  display: flex;
  width: 100%;
  height: 120px;
  background-color: #fff;
  margin-bottom: 10px;
`;

const ProductNavigationDescription = styled.div`
  width: 70%;
`;
const ProductNavigationAnimalProfil = styled.div`
  width: 30%;
`;

const Profil = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfilImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const MenuContainer = styled.div``;
const MenuTrigger = styled.div``;
const DropDownMenu = styled.div``;
const List = () => {
  return (
    <div>
      <Navigation />
      <MainContainer>
        <Content>
          <Filter>dupa</Filter>
          <Products>
            <ProductNavigation>
              <ProductNavigationDescription>1</ProductNavigationDescription>
              <ProductNavigationAnimalProfil>
                <Profil>
                  <MenuContainer>
                    <MenuTrigger>
                      <ProfilImg src="../img/icons/jakub.jpg" />
                    </MenuTrigger>
                    <DropDownMenu>
                      <h3>Test Name</h3>
                      <ul>
                        <li className="dropdownItem">
                          <img></img>
                          <a></a>
                        </li>
                      </ul>
                    </DropDownMenu>
                  </MenuContainer>
                </Profil>
              </ProductNavigationAnimalProfil>
            </ProductNavigation>

            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </Products>
        </Content>
      </MainContainer>
    </div>
  );
};

export default List;
