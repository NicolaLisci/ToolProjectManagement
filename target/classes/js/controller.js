angular.module('controller', [])

.controller('BlogCtrl', ['$scope', '$http', '$log', '$timeout', function($scope, $http, $log, $timeout) {
    $scope.frm = {};
    $scope.notification = {};

    $scope.frmToggle = function() {
        $('#blogForm').slideToggle();
    }

    $http.get('/rest/resources/show/projects')
        .success(function(data) {
            $scope.project = data;
        })
        .error(function(err) {
            $log.error(err);
        })
        $http.get('./js/popDataFR.php')
            .success(function(data) {
                $scope.resource = data;
            })
            .error(function(err) {
                $log.error(err);
            })

    $scope.pushDataP = function($params) {
        $http.post('/rest/resources/load/project', { 'name_project': $params.name_project, 'start_project': $params.start_project,
      'deadline':$params.deadline, 'status':$params.status,'nsenior':$params.nsenior,'njunior':$params.njunior })
            .success(function(data) {
                $scope.notification.success = true;
                $scope.notification.message = "Progetto aggiunto!";
                $timeout(function() {
                    $scope.notification = {};
                }, 3000);
                $scope.blogs = data;
                $scope.frm = {};
                $('#blogForm').slideToggle();
            })
            .error(function(err) {
                $scope.notification.error = true;
                $scope.notification.message = "Impossibile aggiungere progetto!";
                $timeout(function() {
                    $scope.notification = {};
                }, 3000);
            })
    }

    $scope.editData = function($blog) {
        $scope.editBlogData = $blog;
        $('#edit-modal').modal('show');
    }



    $scope.updateDataP = function($params) {
        $('#edit-modal').modal('hide');
        $http.put('/rest/resources/update/project/'+$params.id, {'id': $params.id, 'name_project': $params.name_project, 'start_project': $params.start_project,
      'deadline':$params.deadline, 'status':$params.status,'nsenior':$params.nsenior,'njunior':$params.njunior })
            .success(function(data) {
                $scope.notification.success = true;
                $scope.notification.message = "Progetto aggiornato!";
                $timeout(function() {
                    $scope.notification = {};
                }, 3000);
                $scope.blogs = data;
                $scope.frm = $scope.editBlogData = {};
            })
            .error(function(err) {
                $scope.notification.error = true;
                $scope.notification.message = "Impossibile aggiornare il progetto!";
                $timeout(function() {
                    $scope.notification = {};
                }, 3000);
                $log.error(err);
            })
    }

    $http.get('/rest/resources/show')
        .success(function(data) {
            $scope.resource = data;
        })
        .error(function(err) {
            $log.error(err);
        })


    //_____________________________________________________________________________


    $scope.assignR = function($rid,$pid) {
        console.error();
        $http.put('/rest/resources/assigned/project/'+$rid, { 'assigned': $pid })
            .success(function(data) {
                $scope.notification.success = true;
                $scope.notification.message = "Assegnazione effettuata!";
                $timeout(function() {
                    $scope.notification = {};
                }, 3000);
                $scope.blogs = data;
                $scope.frm = {};
                //$('#blogForm1').slideToggle();
            })
            .error(function(err) {
                $scope.notification.error = true;
                $scope.notification.message = "Impossibile assegnare risorsa!";
                $timeout(function() {
                    $scope.notification = {};
                }, 3000);
            }
          )
}
    $scope.removeDataP = function($params) {
        var cnfrm = confirm("Sicuro di voler cancellare?");
        if (cnfrm) {
            $http.post('/rest/resources/delete/projects/'+$params)
                .success(function(data) {
                    $scope.notification.success = true;
                    $scope.notification.message = "Progetto eliminato!";
                    $timeout(function() {
                        $scope.notification = {};
                    }, 3000);
                    $scope.blogs = data;
                })
                .error(function(err) {
                    $scope.notification.error = true;
                    $scope.notification.message = "Impossibile eliminare il progetto!";
                    $timeout(function() {
                        $scope.notification = {};
                    }, 3000);
                })
        } else {
            //
        }

    }

}])



//_________________________________________________________________________________________________
//Controller per le risorse

.controller('ResCtrl', ['$scope', '$http', '$log', '$timeout', function($scope, $http, $log, $timeout) {
    $scope.frm = {};
    $scope.notification = {};

    $scope.frmToggle = function() {
        $('#blogForm').slideToggle();
    }

    $http.get('/rest/resources/show/')
        .success(function(data) {
            $scope.resource = data;
        })
        .error(function(err) {
            $log.error(err);
        })

    $scope.pushDataR = function($params) {
        $http.post('/rest/resources/load', { 'surname': $params.surname, 'name': $params.name,
'type':$params.type, 'hire':$params.hire })
            .success(function(data) {
                $scope.notification.success = true;
                $scope.notification.message = "Risorsa aggiunta!";
                $timeout(function() {
                    $scope.notification = {};
                }, 3000);
                $scope.blogs = data;
                $scope.frm = {};
                $('#blogForm').slideToggle();
            })
            .error(function(err) {
                $scope.notification.error = true;
                $scope.notification.message = "Impossibile aggiungere la risorsa!";
                $timeout(function() {
                    $scope.notification = {};
                }, 3000);
            })
    }

    $scope.editData = function($blog) {
        $scope.editBlogData = $blog;
        $('#edit-modal').modal('show');
    }


    $scope.editData1 = function($blog) {
        $scope.editBlogData1 = $blog;
        $('#assigned').modal('show');
    }

    $scope.updateDataR = function($params) {
        $('#edit-modal').modal('hide');
        $http.put('/rest/resources/update/resources/'+$params.id, {'id': $params.id, 'surname': $params.surname, 'name': $params.name,
'type':$params.type, 'hire':$params.hire, 'assigned':$params.assigned })
            .success(function(data) {
                $scope.notification.success = true;
                $scope.notification.message = "Risorsa modificata!";
                $timeout(function() {
                    $scope.notification = {};
                }, 3000);
                $scope.blogs = data;
                $scope.frm = $scope.uppdateDataR = {};
            })
            .error(function(err) {
                $scope.notification.error = true;
                $scope.notification.message = "Impossibile modificare la risorsa!";
                $timeout(function() {
                    $scope.notification = {};
                }, 3000);
                $log.error(err);
            })
    }

    $scope.removeDataR = function($params) {
        var cnfrm = confirm("Sicuro di voler cancellare?");
        if (cnfrm) {
            $http.post('/rest/resources/delete/resources/'+$params)
                .success(function(data) {
                    $scope.notification.success = true;
                    $scope.notification.message = "Risorsa eliminata!";
                    $timeout(function() {
                        $scope.notification = {};
                    }, 3000);
                    $scope.blogs = data;
                })
                .error(function(err) {
                    $scope.notification.error = true;
                    $scope.notification.message = "Impossibile eliminare la risorsa!";
                    $timeout(function() {
                        $scope.notification = {};
                    }, 3000);
                })
        } else {
            //
        }

    }

    }])

    //_________________________________________________________________________________________________
    //Controller per la pagina progetto.html

    .controller('RPCtrl', ['$scope', '$http', '$log', '$timeout','$routeParams', function($scope, $http, $log, $timeout, $routeParams) {
        $scope.frm = {};
        $scope.notification = {};
        var idP = $routeParams.id;
        $scope.nJ=0;
        $scope.nS=0;
        //console.log(nJ);
        //console.log(nS);
        //console.log(idP);
        $scope.frmToggle = function() {
            $('#blogForm').slideToggle();
        }


            $http.get('/rest/resources/show/projects/'+idP)
                .success(function(data) {
                    $scope.project = data;
                  $nJA = parseInt($scope.project.njunior);
                  $nSA = parseInt($scope.project.nsenior);
                    console.log("nJ iniziale: " + $nJA);
                    console.log("nS iniziale: "+ $nSA);
                })
                .error(function(err) {
                    $log.error(err);
                })

        $http.get('/rest/resources/show')
              .success(function(data) {
                  $scope.resource = data;
              })
              .error(function(err) {
                  $log.error(err);
              })

        $scope.editData = function($blog) {
            $scope.editBlogData = $blog;
            $('#edit-modal').modal('show');
        }

        $scope.rimuoviR = function($params,$zero) {

            $('#edit-modal').modal('hide');
            console.log($params.type);
            if ($params.type == "junior" && $scope.project.njunior !=0)
            {
              $scope.nJ=$scope.nJ-1;
              console.log("Rimosso junior");
              console.log("nJ successivo: "+ $scope.nJ);
              console.log("nS successivo: "+ $scope.nS);
            }else
            {
              if ($params.type == "senior" && $scope.project.nsenior !=0)
              {
                console.log("Junior è zero");
                $scope.nS=$scope.nS-1;
                console.log("Rimosso senior");
                console.log("nJ successivo: "+ $scope.nJ);
                console.log("nS successivo: "+ $scope.nS);
              }else
              {
                console.log("Senior è zero");
            }
          }
            $http.put('/rest/resources/update/resources/'+$params.id, {'id': $params.id, 'surname': $params.surname, 'name': $params.name,
        'type':$params.type, 'hire':$params.hire, 'assigned':$zero})
                .success(function(data) {
                    $scope.notification.success = true;
                    $scope.notification.message = "Risorsa modificata!";
                    $timeout(function() {
                        $scope.notification = {};
                    }, 3000);
                    $scope.blogs = data;
                    $scope.frm = $scope.uppdateDataR = {};
                })
                .error(function(err) {
                    $scope.notification.error = true;
                    $scope.notification.message = "Impossibile modificare la risorsa!";
                    $timeout(function() {
                        $scope.notification = {};
                    }, 3000);
                    $log.error(err);
                })
        }

        $scope.assegnaR = function($params,$id) {
            $('#edit-modal').modal('hide');
              console.log($params.type);
            if ($params.type == "junior")
            {
              $scope.nJ=$scope.nJ+1;
              console.log("Aggiunto junior");
              console.log("nJ successivo: "+ $scope.nJ);
              console.log("nS successivo: "+ $scope.nS);
            }else {
              $scope.nS=$scope.nS+1;
              console.log("Aggiunto senior");
              console.log("nJ successivo: "+ $scope.nJ);
              console.log("nS successivo: "+ $scope.nS);
            }
            $http.put('/rest/resources/update/resources/'+$params.id, {'id': $params.id, 'surname': $params.surname, 'name': $params.name,
        'type':$params.type, 'hire':$params.hire, 'assigned':$id})
                .success(function(data) {
                    $scope.notification.success = true;
                    $scope.notification.message = "Risorsa modificata!";
                    $timeout(function() {
                        $scope.notification = {};
                    }, 3000);
                    $scope.blogs = data;
                    $scope.frm = $scope.uppdateDataR = {};
                })
                .error(function(err) {
                    $scope.notification.error = true;
                    $scope.notification.message = "Impossibile modificare la risorsa!";
                    $timeout(function() {
                        $scope.notification = {};
                    }, 3000);
                    $log.error(err);
                })
        }

    //    'nJ':$params.nJ,'nS':$params.nS

        $scope.updateDataP = function($params) {
          $('#edit-modal').modal('hide');

            $http.put('/rest/resources/update/project/'+$params.id, {'id': $params.id, 'name_project': $params.name_project, 'start_project': $params.start_project,
          'deadline':$params.deadline, 'status':$params.status,'nsenior':$params.nsenior,'njunior':$params.njunior,'nJ':$scope.nJ,'nS':$scope.nS })
                .success(function(data) {
                  console.log("scope: "+$scope.nJ);
                  console.log("scope: "+$scope.nS);
                  console.log(data);
                    $scope.notification.success = true;
                    $scope.notification.message = "Progetto aggiornato!";
                    $timeout(function() {
                        $scope.notification = {};
                    }, 3000);
                    $scope.blogs = data;
                    $scope.frm = $scope.editBlogData = {};
                })
                .error(function(err) {
                    $scope.notification.error = true;
                    $scope.notification.message = "Impossibile aggiornare il progetto!";
                    $timeout(function() {
                        $scope.notification = {};
                    }, 3000);
                    $log.error(err);
                })
        }






    }])
