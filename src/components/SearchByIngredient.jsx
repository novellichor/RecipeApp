import React from 'react';
import styled from 'styled-components';
import {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';
import './SearchByIngredient.css'

function SearchByIngredient() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searchedbyingredient/'+input)
    };

    return (
        <div class="SearchByIngredient">
            <h3>Search By Ingredient</h3>
            <div>
                <FormStyle onSubmit={submitHandler}>
                    <div>
                        <FaSearch/>
                        <input 
                            onChange={(e) => setInput(e.target.value)} 
                            type="text" 
                            value={input}
                            placeholder="Search by Ingredient" />
                        
                    </div>
                </FormStyle>
            </div>
        </div>
    )
}

const FormStyle = styled.form`
    margin: 0rem 0rem;
    
    div{
        width: 40%;
        position: relative;
    }
    input{
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
`;

export default SearchByIngredient