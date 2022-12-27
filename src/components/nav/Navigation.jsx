import "../nav/navigation.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainContent = styled.div`
   display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  background-color: #08284a;
  height: 100px;
  color: #fff;
  border-bottom: 1px solid #ddd;vvv
`;

const Logo = styled.img`
  width: 160px;
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
    <nav>
      <MainContent>
        <Logo src="../img/logo.svg" />
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="Nav__search-icon"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </SearchSection>
        <UserContainer>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="Nav__icons-size"
              viewBox="0 0 16 16"
            >
              <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383L5.93 1.757zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z" />
            </svg>
          </div>
          <UserDetail>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="Nav__icons-size"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              </svg>
            </div>
            <p>Moje konto</p>
          </UserDetail>
        </UserContainer>
      </MainContent>
    </nav>
  );
};

export default Navigation;
