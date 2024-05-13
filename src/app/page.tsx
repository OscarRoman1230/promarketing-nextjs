import {
    Card,
    Tabs
} from '@/components/ui'
import FormCreateRequest from "@/components/formCreateRequest"
import FormLimitDepot from "@/components/formLimitDepot"

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
                <div>
                    <FormLimitDepot />
                </div>
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