import { ArrowRight, Bell, CarFront, CheckCircle2, ChevronRight, CircleDollarSign, Clock3, CreditCard, MapPinned, Menu, ShieldCheck, Sparkles, Star, User, UsersRound, WalletCards, Zap } from 'lucide-react';

const vehicleCategories = [
  { name: 'Économique', price: 'XOF 5 200', eta: '4 min', accent: 'bg-emerald-100 text-emerald-700' },
  { name: 'Confort', price: 'XOF 7 300', eta: '6 min', accent: 'bg-sky-100 text-sky-700' },
  { name: 'Premium', price: 'XOF 9 800', eta: '8 min', accent: 'bg-violet-100 text-violet-700' },
  { name: 'SUV', price: 'XOF 12 500', eta: '9 min', accent: 'bg-orange-100 text-orange-700' },
];

const recentPlaces = ['Cocody Angré', 'Yopougon Niangon', 'Plateau', 'Marcory Zone 4'];

const driverOptions = [
  { name: 'Akwaba K.', eta: '4 min', car: 'Toyota Corolla', rating: '4.9', price: 'XOF 5 350' },
  { name: 'Nguessan C.', eta: '7 min', car: 'Hyundai Tucson', rating: '4.8', price: 'XOF 6 800' },
  { name: 'Kouassi D.', eta: '10 min', car: 'Mercedes C-Class', rating: '4.7', price: 'XOF 8 200' },
];

const stats = [
  { label: 'Courses aujourd’hui', value: '482' },
  { label: 'Revenus', value: 'XOF 14.2M' },
  { label: 'Taux de satisfaction', value: '94.8%' },
  { label: 'Demandes actives', value: '18' },
];

const careItems = [
  'SOS / assistance',
  'Partager le trajet',
  'Vérifier le chauffeur',
  'Code de sécurité' 
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-600 text-lg font-bold text-white shadow-soft">
              I
            </div>
            <div>
              <div className="text-lg font-bold tracking-tight">IVOIRE MOBILITY</div>
              <div className="text-xs text-slate-500">Votre mobilité, partout en Côte d’Ivoire.</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#services">Services</a>
            <a href="#pricing">Tarifs</a>
            <a href="#security">Sécurité</a>
            <a href="#admin">Admin</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700">Se connecter</button>
            <button className="rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-soft">Réserver</button>
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.3fr_0.7fr] lg:px-8 lg:py-14">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
            <Sparkles className="h-3.5 w-3.5" />
            Pilot zone Abidjan
          </div>

          <div className="space-y-4">
            <h1 className="max-w-xl text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
              Une mobilité moderne, sécurisée et adaptée à la Côte d’Ivoire.
            </h1>
            <p className="max-w-xl text-lg text-slate-600">
              Réservez un trajet, envoyez un colis, gérez vos déplacements professionnels et suivez votre chauffeur en temps réel dans un cadre transparent et accessible.
            </p>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-soft sm:p-5">
            <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr_auto] md:items-center">
              <div className="rounded-2xl bg-slate-100 p-3">
                <div className="mb-1 text-[10px] uppercase tracking-[0.2em] text-slate-500">Départ</div>
                <div className="flex items-center gap-2 font-medium text-slate-800">
                  <MapPinned className="h-4 w-4 text-brand-600" />
                  Cocody Angré
                </div>
              </div>

              <div className="hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                <ArrowRight className="h-4 w-4" />
              </div>

              <div className="rounded-2xl bg-slate-100 p-3">
                <div className="mb-1 text-[10px] uppercase tracking-[0.2em] text-slate-500">Destination</div>
                <div className="flex items-center gap-2 font-medium text-slate-800">
                  <MapPinned className="h-4 w-4 text-amber-500" />
                  Plateau
                </div>
              </div>

              <button className="rounded-2xl bg-brand-600 px-5 py-3 font-semibold text-white shadow-soft hover:bg-brand-700">
                Trouver un trajet
              </button>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-slate-600">
              {recentPlaces.map((place) => (
                <span key={place} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5">
                  {place}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
                <div className="text-xs uppercase tracking-[0.18em] text-slate-500">{stat.label}</div>
                <div className="mt-3 text-2xl font-black text-slate-900">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-[32px] bg-slate-900 p-5 text-white shadow-soft">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-slate-400">En direct</div>
              <div className="mt-1 text-xl font-bold">Course active</div>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
              <CarFront className="h-5 w-5" />
            </div>
          </div>

          <div className="rounded-3xl bg-slate-800 p-4">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="text-sm text-slate-400">Chauffeur</div>
                <div className="mt-1 text-lg font-semibold">Akwaba K.</div>
              </div>
              <div className="flex items-center gap-1 rounded-full bg-amber-500/15 px-2 py-1 text-amber-300">
                <Star className="h-3.5 w-3.5 fill-current" />
                4.9
              </div>
            </div>

            <div className="rounded-2xl bg-slate-700 p-3">
              <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-slate-400">
                <span>Distance</span>
                <span>ETA</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>4.1 km</span>
                <span>4 min</span>
              </div>
            </div>

            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <div className="flex items-center justify-between">
                <span>Véhicule</span>
                <span className="font-medium text-white">Toyota Corolla</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Numéro</span>
                <span className="font-medium text-white">AB 784 203</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Trajet</span>
                <span className="font-medium text-white">Plateau</span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <button className="flex-1 rounded-2xl bg-brand-600 px-4 py-3 font-semibold text-white">Suivre</button>
            <button className="rounded-2xl border border-slate-700 bg-slate-800 px-4 py-3 text-slate-100">Assistance</button>
          </div>
        </aside>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-3">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-600">Services</div>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900">Choisissez le bon service pour chaque besoin</h2>
          </div>
          <button className="hidden rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 md:inline-flex">Voir tout</button>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {vehicleCategories.map((category) => (
            <div key={category.name} className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-brand-200">
              <div className={`mb-4 inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${category.accent}`}>
                {category.name}
              </div>
              <div className="text-2xl font-black text-slate-900">{category.price}</div>
              <div className="mt-2 flex items-center justify-between text-sm text-slate-600">
                <span>ETA</span>
                <span className="font-medium text-slate-900">{category.eta}</span>
              </div>
              <div className="mt-5 flex items-center justify-between text-sm text-slate-500">
                <span>Disponible</span>
                <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700">Oui</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-[32px] bg-gradient-to-r from-brand-700 to-emerald-700 p-6 text-white shadow-soft sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-100">Tarification</div>
              <h3 className="mt-3 text-3xl font-black tracking-tight">Estimation claire avant confirmation</h3>
              <p className="mt-3 max-w-lg text-sm text-emerald-50">
                Le prix estimé inclut la prise en charge, la distance, la durée et les frais de service. Le montant final reste explicité avant validation.
              </p>
            </div>

            <div className="rounded-[26px] bg-white/10 p-4 ring-1 ring-white/10 backdrop-blur">
              <div className="space-y-4 text-sm text-emerald-50/90">
                <div className="flex items-center justify-between">
                  <span>Distance</span>
                  <span className="font-medium text-white">18.4 km</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Temps estimé</span>
                  <span className="font-medium text-white">32 min</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Frais de service</span>
                  <span className="font-medium text-white">XOF 350</span>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-white/15 pt-4 text-base font-bold text-white">
                  <span>Total estimé</span>
                  <span>XOF 5 350</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="security" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-600">Sécurité</div>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900">Des protections pensées pour un usage réel</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {careItems.map((item) => (
            <div key={item} className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-soft">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-brand-600">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div className="text-lg font-bold text-slate-900">{item}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="admin" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-600">Admin</div>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900">Supervision opérationnelle</h2>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm text-slate-600">
              <Bell className="h-4 w-4 text-brand-600" />
              14 demandes d’assistance
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="flex items-center justify-between">
                <div className="text-sm text-slate-500">Chauffeurs en ligne</div>
                <UsersRound className="h-4 w-4 text-brand-600" />
              </div>
              <div className="mt-3 text-3xl font-black text-slate-900">128</div>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="flex items-center justify-between">
                <div className="text-sm text-slate-500">Trajets actifs</div>
                <Zap className="h-4 w-4 text-brand-600" />
              </div>
              <div className="mt-3 text-3xl font-black text-slate-900">54</div>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="flex items-center justify-between">
                <div className="text-sm text-slate-500">Revenus plateforme</div>
                <CircleDollarSign className="h-4 w-4 text-brand-600" />
              </div>
              <div className="mt-3 text-3xl font-black text-slate-900">XOF 4.38M</div>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="flex items-center justify-between">
                <div className="text-sm text-slate-500">Incidents</div>
                <ShieldCheck className="h-4 w-4 text-brand-600" />
              </div>
              <div className="mt-3 text-3xl font-black text-slate-900">06</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-sm text-slate-600 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-2 font-semibold text-slate-900">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-600 text-sm font-bold text-white">I</div>
            Ivoire Mobility
          </div>
          <div className="flex items-center gap-6">
            <span>Demo data only</span>
            <span>Client</span>
            <span>Chauffeur</span>
            <span>Admin</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
