
const WA_NUMBER='525543638085';
function waLink(msg){return 'https://wa.me/'+WA_NUMBER+'?text='+encodeURIComponent(msg)}
document.querySelectorAll('[data-botox]').forEach(b=>{
  b.addEventListener('click',()=>{window.open(waLink('Hola Dra. Daniela, quiero cotizar: '+b.dataset.botox),'_blank')})
});
const form=document.getElementById('citaForm');
if(form){form.addEventListener('submit',e=>{
  e.preventDefault();
  const d=new FormData(form);
  const plain=`Hola Dra. Daniela, quiero agendar una cita.\n\n- Nombre: ${d.get('nombre')}\n- Telefono: ${d.get('telefono')}\n- Paciente: ${d.get('genero')}\n- Tratamiento: ${d.get('tratamiento')}\n- Fecha preferida: ${d.get('fecha')||'A convenir'}\n- Hora preferida: ${d.get('hora')||'A convenir'}\n- Mensaje: ${d.get('mensaje')||'Sin mensaje adicional'}`;
  window.open(waLink(plain),'_blank');
  document.getElementById('ok').style.display='block';
});}
