for paye in 7 8 9 10 11 12;do
       sudo mkdir ../paye$paye;
	for dars in 1 2 3 4 5 6 7 8 9;do
	 	sudo mkdir ../paye$paye/dars$dars;

		sudo cp    index_paye_sample.vue ../paye$paye/Paye$paye"Index".vue;
		sudo cp    index_dars_sample.vue  ../paye$paye/dars$dars/Paye$paye$dars"Index".vue;
		sudo cp    context_sample.vue  ../paye$paye/dars$dars/Paye$paye$dars"Context".vue;
		sudo cp    words_sample.vue  ../paye$paye/dars$dars/Paye$paye$dars"Words".vue;
	done
done	
