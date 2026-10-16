import { hours, site, type DayHours } from '../data/site';

const toMin = (t: string) => {
  const [h, m] = t.split(':').map(Number);
  return h * 60 + m;
};

/** Dia da semana e minutos no fuso da loja, não no fuso do visitante. */
function nowInStoreTime(): { day: number; minutes: number } {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: site.timeZone,
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(new Date());
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? '';
  const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
  return { day, minutes: Number(get('hour')) * 60 + Number(get('minute')) };
}

export interface OpeningStatus {
  today: number;
  open: boolean;
  title: string;
  detail: string;
}

export function getOpeningStatus(): OpeningStatus {
  const { day: today, minutes } = nowInStoreTime();
  const byDay = new Map<number, DayHours>(hours.map((h) => [h.day, h]));
  const t = byDay.get(today)!;
  const open = !!(t.open && t.close && minutes >= toMin(t.open) && minutes < toMin(t.close));

  let detail = '';
  if (open) {
    detail = `fecha às ${t.close}`;
  } else if (t.open && minutes < toMin(t.open)) {
    detail = `abre hoje às ${t.open}`;
  } else {
    for (let i = 1; i <= 7; i++) {
      const n = byDay.get((today + i) % 7)!;
      if (n.open) {
        detail = `abre ${i === 1 ? 'amanhã' : n.label.toLowerCase()} às ${n.open}`;
        break;
      }
    }
  }

  return { today, open, title: open ? 'Aberto agora' : 'Fechado agora', detail };
}

/** Preenche os indicadores de status e destaca o dia de hoje na tabela de horários. */
export function renderOpeningStatus(): void {
  const s = getOpeningStatus();

  document.querySelectorAll<HTMLElement>('[data-status]').forEach((el) => {
    el.querySelectorAll<HTMLElement>('[data-status-title]').forEach((n) => (n.textContent = s.title));
    el.querySelectorAll<HTMLElement>('[data-status-detail]').forEach((n) => (n.textContent = s.detail));
    el.querySelectorAll<HTMLElement>('[data-status-dot]').forEach((n) => (n.dataset.open = String(s.open)));
    el.hidden = false;
  });

  document.querySelectorAll<HTMLElement>('[data-day]').forEach((row) => {
    const isToday = Number(row.dataset.day) === s.today;
    row.classList.toggle('is-today', isToday);
    const badge = row.querySelector<HTMLElement>('[data-today-badge]');
    if (badge) badge.hidden = !isToday;
  });
}
