const exemplarD = require('../data/exemplar.data.js');
const emprestimoD = require('../data/emprestimo.data.js');

exports.createExemplar = async function (data) {
	const novoExemplar = data;
	return exemplarD.createExemplar(novoExemplar);
}

exports.findAllByIsbn = async function (isbn) {

	return exemplarD.findAllByIsbn(isbn);
}


exports.findExemplaresDisponiveis = async function (isbn) {
	
	const exemplares =  await exemplarD.findAllByIsbn(isbn);
	const emprestimos = await emprestimoD.findAllByIsbn(isbn);

	let exemplarLivre = []
	exemplares.forEach(exemplar => {
		let check = true;
		emprestimos.forEach(emprestimo => {
			if(exemplar.numero === emprestimo.nro_exemplar) {
				check = false;
			}
		})
		if(check) {
			exemplarLivre.push(exemplar);
		}
	})

	return exemplarLivre;
}
