import React, {ChangeEvent, useContext, useEffect, useState} from 'react';

import {Container, Preview, UploadFile} from './styles';
import Head from "../../../Shared/Head";
import Input from "../../Forms/Input/Index";
import useForms from "../../../Hooks/useForm";
import {NavLink, useNavigate} from "react-router-dom";
import usePhoto from "../../../Hooks/usePhoto";
import Button from "../../Forms/Button/Index";
import Loading from "../../../Shared/Loading/Index";
import {UserContext} from "../../UserContext/Index";

interface PreviewImage {
  preview: string;
  raw: File
}

const UserPhotoPost: React.FC = () => {

  const {sendNewPhoto, loading, erro, sucesso} = usePhoto();
  const { user } = useContext(UserContext);

  const
    navigate = useNavigate(),
    [img, setImg] = useState<PreviewImage>({} as PreviewImage),
    nome = useForms('nome'),
    peso = useForms('number'),
    idade = useForms('number'),
    controls = [nome, peso, idade];


  useEffect(() => {

    if (sucesso) navigate('/conta');

  }, [sucesso, navigate]);


  async function handlerSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {

    event.preventDefault();

    if (!user)
      return ;

    const someInvalidField = controls
      .map(x => x.isValid())
      .some(isValid => !isValid);

    if (someInvalidField)
      return;


    const formData = new FormData();

    formData.append('files', img.raw);
    formData.append('nome', nome.value);
    formData.append('peso', peso.value);
    formData.append('idade', idade.value);
    formData.append('usuarioId', user.id);


    await sendNewPhoto(formData);

  }

  function handleImgChange({target}: ChangeEvent<HTMLInputElement>) {

    if (!target.files || target.files.length === 0)
      return;

    const file = target.files[0];

    setImg({
      preview: URL.createObjectURL(file),
      raw: file
    });

  }


  if (loading) return <Loading  />

  return (
    <Container>
      <form onSubmit={handlerSubmit}>
        <Head title="Poste sua foto " description="Pagina pessoal onde você pode gerenciar suas fotos"/>


        <Input
          nome="nome"
          label="Nome"
          type="text"
          value={nome.value}
          onChange={nome.onChange}
          onBlur={nome.onBlur}
          erro={nome.erro}/>

        <Input
          nome="peso"
          label="Peso"
          type="number"
          value={peso.value}
          onChange={peso.onChange}
          onBlur={peso.onBlur}
          erro={peso.erro}/>

        <Input
          nome="idade"
          label="Idade"
          type="number"
          value={idade.value}
          onChange={idade.onChange}
          onBlur={idade.onBlur}
          erro={idade.erro}/>

        <UploadFile>
          <label htmlFor="img">+</label>
          <input type="file" name="img" id="img" onChange={handleImgChange}/>
        </UploadFile>

        {loading ?
          <Button disabled={true}>Enviando...</Button> :
          <Button>Enviar</Button>
        }
      </form>

      {img.preview && (
        <Preview imageUrl={img.preview} />
      )}



    </Container>
  );

}

export default UserPhotoPost;
