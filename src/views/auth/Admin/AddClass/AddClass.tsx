import AdminTemplate from 'components/templates/AdminTemplate/AdminTemplate';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 1rem;
  margin: 3rem 3rem 0;

  display: flex;
  flex-direction: column;
`;

const Heading = styled.h1`
  font-size: 2.6rem;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  border-bottom: 3px solid #eceff7;
  padding-bottom: 1rem;
`;

// const Form =

const AddClass = () => {
  // const handleSubmit = (e.preventDefault) => {

  // }

  return (
    <AdminTemplate>
      <Wrapper>
        <Heading>Dodaj klasę</Heading>
        <form>
          <label htmlFor="name">nazwa klasy</label>
          <input type="text" name="name" />
          <label htmlFor="amountOfStudents">Ilość osób w klasie</label>
          <select name="amountOfStudents" id="">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
            <option value="32">32</option>
            <option value="33">33</option>
            <option value="34">34</option>
            <option value="35">35</option>
          </select>
          <select name="" id="">
            <option value="">Pierwsze klasy</option>
            <option value="">Drugie klasy</option>
            <option value="">Trzecie klasy</option>
            <option value="">Czwarte klasy</option>
          </select>
        </form>
      </Wrapper>
    </AdminTemplate>
  );
};

export default AddClass;
