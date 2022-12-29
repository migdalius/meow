import "../nav/navigation.css";

import styled from "styled-components";
import { Basket3, PersonCircle, Search } from "react-bootstrap-icons";

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  background-color: #08284a;
  height: 100px;
  color: #fff;
  border-bottom: 1px solid #ddd;
`;

const Logo = styled.img`
  width: 200px;
`;

const SearchSection = styled.div`
  width: 650px;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const UserDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Navigation = () => {
  return (
    <MainContent>
      <Logo src="../img/logo.png" />
      <SearchSection>
        <select name="pets" id="pet-select">
          <option value="">Kategorie</option>
          <option value="dog">Karma mokra</option>
          <option value="cat">Karma sucha</option>
          <option value="hamster">RAFC</option>
          <option value="parrot">Karma ekologiczna</option>
        </select>

        <input
          type="text"
          placeholder="Jakiej karmy szukasz?"
          className="Nav__searchBar"
        />
        <Search color="#08284a" size={20} />
      </SearchSection>
      <UserContainer>
        <div>
          <Basket3 color="#fff" size={24} />
        </div>
        <UserDetail>
          <div>
            <PersonCircle color="#fff" size={24} />
          </div>
          <p>Moje konto</p>
        </UserDetail>
      </UserContainer>
    </MainContent>
  );
};

export default Navigation;
