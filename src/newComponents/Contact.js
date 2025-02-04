import React, { useState } from 'react';
import InputMask from 'react-input-mask'; // Importando a biblioteca
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
    });

    const [errors, setErrors] = useState({});

    // Função que trata as mudanças nos campos do formulário
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Validação dos dados
    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'O nome é obrigatório.';
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'E-mail inválido.';

        // Remove os caracteres não numéricos do telefone antes de validar
        const phoneNumber = formData.phone.replace(/\D/g, ''); // Remove tudo que não é número
        if (!phoneNumber || phoneNumber.length !== 11) newErrors.phone = 'Número de telefone inválido.';

        if (!formData.city) newErrors.city = 'A cidade é obrigatória.';
        return newErrors;
    };

    // Envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        console.log('Dados enviados:', formData);
        alert('Formulário enviado com sucesso!');
        setFormData({ name: '', email: '', phone: '', city: '' });
        setErrors({});
    };

    return (
        <div className="contact-page">
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <h2>Entre em Contato</h2>
                    <div>
                        <label htmlFor="name">Nome:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {errors.name && <small>{errors.name}</small>}
                    </div>

                    <div>
                        <label htmlFor="email">E-mail:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <small>{errors.email}</small>}
                    </div>

                    <div>
                        <label htmlFor="phone">Telefone:</label>
                        <InputMask
                            mask="(99) 99999-9999" // Formato da máscara de telefone
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        {errors.phone && <small>{errors.phone}</small>}
                    </div>

                    <div>
                        <label htmlFor="city">Cidade:</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                        />
                        {errors.city && <small>{errors.city}</small>}
                    </div>

                    <button type="submit">Enviar</button>
                </form>
            </div>

            <div className="info-sidebar">
                <div className="info-card">
                    <h2>Living</h2>
                </div>
                <div className="info-card">
                    <p>
                        Consulte um de nossos corretores!
                        Conheça mais detalhes dos apartamentos da Living.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
