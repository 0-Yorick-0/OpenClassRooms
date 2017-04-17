<?php

// src/OC/PlatformBundle/Controller/AdvertController.php

namespace OC\PlatformBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

class AdvertController extends Controller
{
    public function indexAction()
    {
        //On veut avoir l'URL de l'annonce d'id 5
        // $url = $this->generateUrl(
        //   'oc_platform_view',
        //   array('id' => 5)
        // );
        //$url vaut "/platform/advert/5"

        // return new Response("URL de l'annnonce d'id est : " . $url);

        $content = $this
        ->get('templating')
        ->render('OCPlatformBundle:Advert:index.html.twig', array('nom' => 'Batman'));

        return new Response($content);
    }

    public function viewAction($id){
      // Ici, on récupèrera depuis la base de données
      // l'annonce correspondant à l'id $id.
      // Puis on passera l'annonce à la vue pour
      // qu'elle puisse l'afficher

      return new Response("Affichage de l'annonce d'id : " .$id);
    }

    public function viewSlugAction($year, $slug, $format){
      return new Response(
        "On pourrait afficher l'annonce correspondant au
            slug '".$slug."', créée en ".$year." et au format ".$format."."
      );
    }
}
