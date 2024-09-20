import { useDispatch, useSelector } from 'react-redux';
import { useState, useCallback } from 'react';
import { registerUser } from '../store/reducers/auth';

const useRegister = () => {
  const dispatch = useDispatch();
  const { user, status, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    cpf: '',
    cidade: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    uf: '',
    cep: '',
    funcao: '',
    telefone: '',
    ramal: '',
    ano: '',
    genero: '',
    aniversario: '',
    naturalidade: '',
    civil: '',
    filhos: '',
    qntdfilhos: '',
    camiseta: '',
    calcado: '',
    empresa: '',
    departamento: '',
    permissoesPerfil: '',  
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const register = useCallback(
    async () => {
      try {
        await dispatch(registerUser(formData)).unwrap();
        setFormData({
          nome: '',
          email: '',
          senha: '',
          cpf: '',
          cidade: '',
          logradouro: '',
          numero: '',
          complemento: '',
          bairro: '',
          uf: '',
          cep: '',
          funcao: '',
          telefone: '',
          ramal: '',
          ano: '',
          genero: '',
          aniversario: '',
          naturalidade: '',
          civil: '',
          filhos: '',
          qntdfilhos: '',
          camiseta: '',
          calcado: '',
          empresa: '',
          departamento: '',
          permissoesPerfil: '', // Limpar o valor de permissõesPerfil também
        });
      } catch (err) {
        console.error('Failed to register user:', err);
      }
    },
    [dispatch, formData]
  );

  return {
    formData,
    handleChange,
    register,
    status,
    error,
  };
};

export default useRegister;
