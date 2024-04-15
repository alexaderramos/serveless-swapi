const mapaTraduccion = {
  name: 'nombre',
  height: 'altura',
  mass: 'masa',
  hair_color: 'color_pelo',
  homeworld: 'planeta',
  gender: 'genero',
  url: 'url',
  created: 'creado_en',
  edited: 'editado_en',
  eye_color: 'color_ojos',
  birth_year: 'fecha_nacimiento',
  films: 'peliculas',
  species: 'especies',
  vehicles: 'vehiculos',
  starships: 'starships',
};

export function personajeMapper(objeto: any): any {
  const objetoTraducido: any = {};

  Object.keys(objeto).forEach((key) => {
    objetoTraducido[mapaTraduccion[key]] = objeto[key];
  });
  return objetoTraducido;
}
