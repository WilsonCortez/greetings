
function getWeekDay(){
  let diaSemana = new Intl.DateTimeFormat('Pt-BR', {weekday: 'long'}).format(new Date()).toLocaleUpperCase()
  let dia = new Intl.DateTimeFormat('pt-BR', {day: '2-digit'}).format(new Date());
  let mes = new Intl.DateTimeFormat('pt-BR', {month: '2-digit'}).format(new Date());
  let ano = new Intl.DateTimeFormat('pt-BR', {year: 'numeric'}).format(new Date());
 let data = `${diaSemana} ${dia}/${mes}/${ano}`; 
 return data
}
function getHour(){
   let hour = Intl.DateTimeFormat('pt-BR', {hour: 'numeric'}).format(new Date());
   let min = Intl.DateTimeFormat('pt-BR', {minute: '2-digit'}).format(new Date());
   let isHour = parseInt(hour);
   let hello: string
   if( isHour >= 1 && isHour <= 12){
        return hello = "BOM DIA"
   }else if(isHour >= 13 && isHour <= 18){
        return hello = "BOA TARDE"
   }else if(isHour >= 19 && isHour <= 23){
    return hello = "BOA NOITE"
   }
}
export default function Home() {
  return (
    <main className="container_demo">
      <div className="container_title">
          <p>{getWeekDay()}</p>
          <h3 className="title_demo">{getHour()}</h3>         
      </div>
    </main>
  )
}
