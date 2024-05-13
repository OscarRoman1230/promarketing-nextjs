import {
    Card,
    Tabs
} from '@/components/ui'
import FormCreateRequest from "@/components/formCreateRequest"

const getProviders = async () => {
    const res = await fetch('https://64b68442df0839c97e15b2a0.mockapi.io/api/v1/provider');

    return await res.json();
}

const mapProviders = async () => {
    const res = await getProviders()
    return res.map((item: any) => {
        return {
            id: parseInt(item.id),
            name: item.name || item.Name,
            description: item.description || item.Descripcion,
            check: false
        }
    })
}

export default async function Home() {

    const providers = await mapProviders()

    const items = [
        {
            title: 'Crear Solicitud',
            content: (
                <div className="flex flex-wrap flex-col gap-2">
                    <FormCreateRequest providers={providers} />
                </div>

            ),
        },
        {
            title: 'Límite de depósito',
            content: (
                <Card>
                    <h1 className='text-3xl text-blue-600'>Title Test 2</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                        aperiam asperiores doloribus velit dolore magnam ex consectetur fugit
                        earum illum qui similique architecto dolorum, minima enim quidem
                        voluptatibus at nulla deleniti harum! Totam, mollitia quos voluptatem
                        deleniti provident obcaecati rerum.
                    </p>
                </Card>
            ),
        },
    ]


    return (
        <div>
            <div className="grid gap-8">
                <div className="flex flex-col gap-2">
                    <Tabs items={items}/>
                </div>
            </div>
        </div>
    )
}