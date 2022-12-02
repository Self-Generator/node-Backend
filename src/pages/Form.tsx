import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export const Form = () => {

    useEffect(() => {
        document.title = "Form"
    })

    const navigate = useNavigate()

    const schema = yup.object().shape({
        name: yup.string().required(),
        field1: yup.string().required(),
        field1t: yup.string().required(),
        field2: yup.string().required().notOneOf([yup.ref('field1')], 'Field 2 cannot be the same as Field 1'),
        field2t: yup.string().required(),
    })

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data: any) => {
        console.log(data)
        navigate(`/node-backend/Generate/${data.field1t}/${data.field2t}/${data.name}/${data.field1}/${data.field2}`)
    }

    return (
        <div>
            <span className="anchor"></span>
            <form className="contactForm" onSubmit={handleSubmit(onSubmit)}  >
                <h1>
                    <img alt="a" id="hrtLogo" src="https://raw.githubusercontent.com/dependabot-pr/Static-Files/30a9957af65afeecf3f2430f92a09706952b4056/Assets/Logo/Technologies/Node.svg" draggable="false" />
                    <span className='mr-5'></span> node-backend
                </h1>
                <input type="text" placeholder="Model Name" {...register('name')} list="name" />

                <div className="d-flex">
                    <input type="text" placeholder="Model First Field" {...register('field1')} list="fields" />
                    <input type="text" placeholder="Type" {...register('field1t')} list="dataType" style={{ 'width': '35%', 'marginLeft': '10px' }} />
                </div>

                <div className="d-flex">
                    <input type="text" placeholder="Model Second Field" {...register('field2')} list="fields" />
                    <input type="text" placeholder="Type" {...register('field2t')} list="dataType" style={{ 'width': '35%', 'marginLeft': '10px' }} />
                </div>

                <button className='blueBackground' type='submit'>
                    Generate
                    <i className="fa-solid fa-play"></i>
                </button>
            </form>

            <datalist id="name">
                <option>Message</option>
                <option>Contacts</option>
                <option>User</option>
            </datalist>
            <datalist id="fields">
                <option>name</option>
                <option>email</option>
                <option>address</option>
            </datalist>
            <datalist id="dataType">
                <option>String</option>
                <option>Int</option>
                <option>Date</option>
                <option>Boolean</option>
            </datalist>
        </div>
    );
}
