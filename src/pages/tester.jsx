import DefaultLayout from 'layouts/default-layout'
import Input from 'components/form/input'
import Button from 'components/common/button'
import { useForm } from 'react-hook-form'

export default function Tester() {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className='flex justify-center items-center'>
      <div className='w-[300px] mt-[100px]'>
        <Input
          __test__='input-sr1'
          errorMessage='Name is required'
          isError={errors.somevalidname}
          label='Some Valid Name'
          name='somevalidname'
          placeholder='Some Valid Name'
          register={register}
        />
        <Button
          className='py-1 px-6 rounded bg-primary text-white'
          testid='button-sr1'
          text='Submit'
          onClik={handleSubmit(onSubmit)}
        />
      </div>
    </div>
  )
}

Tester.getLayout = (page) => (
  <DefaultLayout>
    {page}
  </DefaultLayout>
)
