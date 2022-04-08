import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../components/Button';
import useAppSelector from '../../hooks/useAppSelector';
import { alterTitle } from '../../reducers/home/actions';
import * as HomeApi from '../../services/home'
import { Container, Title } from './styles';

const Home: React.FC = () => {

    const { title } = useAppSelector((state) => state.homeReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        //dispatch(HomeApi.getDataHome())
    }, [])

    const alterName = () => {
        let count = Math.floor(Math.random() * 10);
        dispatch(alterTitle(`Home ${count}`))
    }

    return (
        <Container>
            <Title>{title}</Title>
            <Button
                containerStyle={{ marginTop: 20 }}
                onPress={() => alterName()}
                title={'Alterar'}
            />
        </Container>
    )
}

export default Home;