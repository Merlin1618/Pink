module.exports=function(grunt){
	grunt.loadNpmTasks("assemble-less");

	grunt.initConfig({
		less: {
			style:{
				files:{
					"css/style.css": "less/style.less"
				}
			}
		}
	});
};