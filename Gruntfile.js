module.exports = function(grunt) {

    var configName = grunt.option('config') || "config.json";
    var config = grunt.file.readJSON(configName);   
    var data = grunt.option('data') || 'data.json' 

    grunt.registerTask('generateIndex', function(){
		
		grunt.file.copy('src/index.html', config.buildFolder + '/index.html', 
		{
			process: function(files){
				return grunt.template.process(files, 
					{
						data: {
							appName: config.appName
						}
					}
				);
			}
		});
		
    });


    grunt.registerTask('generatePage1', function(){
		
		grunt.file.copy('src/page1.html', config.buildFolder + '/' + config.pageOneName + '.html', 
		{
			process: function(files){
				return grunt.template.process(files, 
					{
						data: {
							appName: config.appName
						}
					}
				);
			}
		});
		
    });


    grunt.registerTask('generatePage2', function(){
		
		grunt.file.copy('src/page2.html', config.buildFolder + '/' + config.pageTwoName + '.html', 
		{
			process: function(files){
				return grunt.template.process(files, 
					{
						data: {
							appName: config.appName
						}
					}
				);
			}
		});
		
    });


    grunt.registerTask('build',
    ['generateIndex', 'generatePage1', 'generatePage2']);

}