import Image from 'next/image'

export type Props = {
  title: string
  description: string
  buttonDescription?: string
  image: string
}

export async function PlansSection({ title, description, image }: Props) {
  return (
    <div className="w-80">
      <Image src={image} alt={title} />
      <h4 className="text-3xl text-white font-bebasNeue my-3">{title}</h4>
      <p className="text-lg text-white mb-5 max-w-[274px]">{description}</p>
    </div>
  )
}
