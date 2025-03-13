import React from "react";
import styles from '@/styles/dealers.module.css';
import {useReCaptcha} from "next-recaptcha-v3";
import {Dealer} from "@/app/dealers/page";
import InputDealers from "@/components/dealers/input-dealers/input-dealers";
import {DealerContactClickRequest} from "@/app/api/v1/dealer-contact-click/route";
import {Dialog, DialogContent, DialogDescription, DialogFooter, DialogTitle} from "@/components/ui/dialog";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

export default function Dealers() {
  const [showDialog, setShowDialog] = React.useState(false);
  const [dealers, setDealers] = React.useState<Dealer[]>([]);
  const [customerLocation, setCustomerLocation] = React.useState<google.maps.places.PlaceResult | null>(null)
  const { executeRecaptcha } = useReCaptcha();

  async function onSearchLocation(value: google.maps.places.PlaceResult | null) {
    const token = executeRecaptcha('dealer_search_location');
    const url = '/api/v1/dealer-search-location';
    const result: { value: Dealer[] } = await fetch(url, {
      method: 'POST', body: JSON.stringify({ token, value })
    }).then(response => response.ok ? response.json() : { value: [] });

    setCustomerLocation(value);
    setDealers(result.value);
    setShowDialog(true);
  }

  return <section className={styles.fad}>
    <h1>Busca tu distribuidor más cercano</h1>
    <div className={styles.content}>
      <aside>
        <InputDealers onSearch={onSearchLocation}/>
        <DealerDialog
          dealers={dealers}
          show={showDialog}
          customerLocation={customerLocation}
          onHide={() => setShowDialog(false)}
        ></DealerDialog>
        {dealers.length <= 0 && <p style={{margin: '8px 0 0 8px'}}>
            Introduce tu código postal y te mostraremos los distribuidores más cercanos a tu posición.
        </p>}
      </aside>
    </div>
  </section>
}

function DealerDialog({ dealers, show, onHide, customerLocation }: { dealers: Dealer[], show: boolean, onHide: () => void, customerLocation: google.maps.places.PlaceResult | null }) {
  const { executeRecaptcha } = useReCaptcha();
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  async function handleContactClick(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);

    const token = await executeRecaptcha('dealer_contact_click');
    const url = '/api/v1/dealer-contact-click';
    const formData = new FormData(event.target as HTMLFormElement);

    fetch(url, {
      method: 'POST', body: JSON.stringify({
        token, dealers: dealers, customer_location: customerLocation, customer_info: {
          name: formData.get('name') as string,
          email: formData.get('email') as string,
          phone: formData.get('phone') as string,
        }
      } as DealerContactClickRequest),
    })
      .then(() => setSuccess(true))
      .finally(() => setLoading(false));

  }
  const getTitle = () => {
    return success ? '¡Informacion enviada!' : 'Has encontrado el nirvana, casi';
  }

  const getDescription = () => {
    return success ? 'Hemos enviado la informacion de los distribuidores mas cercanos a ti a tu correo. Si no lo encuentras, no olvides comprobar la carpeta de spam, o contactar con nosotros' : 'Para saber con qué distribuidores puedes conectarte, introduce tu correo electrónico, o deja que te llamemos';
  }
  return <Dialog open={show} onOpenChange={(open) => !open ? onHide() : undefined}>
    <DialogContent>
      <DialogTitle>{getTitle()}</DialogTitle>
      <DialogDescription>{getDescription()}</DialogDescription>

      <div className='flex flex-row-reverse gap-8'>
        {!success && <form className='flex flex-col justify-center gap-y-3 grow' onSubmit={handleContactClick}>
            <div className="grid gap-y-1">
                <label>Nombre</label>
                <Input type='text' name='name' />
            </div>
            <div className="grid gap-y-1">
                <label>Teléfono</label>
                <Input type='tel' name='phone' />
            </div>
            <div className="grid gap-y-1">
                <label>Correo electrónico</label>
                <Input type='email' name='email' />
            </div>
            <DialogFooter className='mt-2'>
                <Button type="submit" disabled={loading}>Quiero saber más</Button>
            </DialogFooter>
        </form>}
      </div>
      {success && <DialogFooter>
          <Button type="submit" onClick={() => onHide()}>Seguir navegando</Button>
      </DialogFooter>}
    </DialogContent>
  </Dialog>
}
