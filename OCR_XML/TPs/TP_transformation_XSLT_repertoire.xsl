<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output
    method="html"
    encoding="UTF-8"
    indend="yes" >
  </xsl:output>

  <xsl:template match="/">
    <!-- Pour obtenir un document html5, on inscrit en dur la ligne "<!DOCTYPE html>"-->
    <xsl:text disable-output-escaping='yes'>&lt;!DOCTYPE html&gt;</xsl:text>

    <html>
      <head>
        <title>TP Transformation XSLT</title>
      </head>

      <body>
        <xsl:for-each select="repertoire/personne">
          <xsl:call-template name="afficherPerso">
            <xsl:with-param name="personne" select="."/>
            <xsl:with-param name="sexe" select="@sexe" />
          </xsl:call-template>
        </xsl:for-each>
      </body>
    </html>
  </xsl:template>

<!--Template d'affichage du perso -->
  <xsl:template name="afficherPerso">
    <xsl:param name="personne"/>
    <xsl:param name="sexe" />

    <xsl:element name="div">
      <xsl:attribute name="style">
        <xsl:choose>
          <xsl:when test="$sexe = 'masculin'">
              background-color:blue;
          </xsl:when>
          <xsl:otherwise>
              background-color:pink;
          </xsl:otherwise>
        </xsl:choose>
        width:30%;
        font-size:2rem;
        padding:5px;
      </xsl:attribute>

      <!-- Affichage des civilités -->
      <xsl:call-template name="afficherNom">
        <xsl:with-param name="nom" select="$personne/nom" />
        <xsl:with-param name="prenom" select="$personne/prenom" />
        <xsl:with-param name="adresse" select="$personne/adresse" />
      </xsl:call-template>

      <!-- Affichage des telephones -->
      <xsl:if test="count($personne/telephones) != 0">
        <xsl:call-template name="afficherTelephones">
          <xsl:with-param name="telephones" select="$personne/telephones" />
        </xsl:call-template>
      </xsl:if>

      <!-- Affichage des mails -->
      <xsl:if test="count($personne/emails) != 0">
        <xsl:call-template name="afficherMails">
          <xsl:with-param name="emails" select="$personne/emails" />
        </xsl:call-template>
      </xsl:if>

    </xsl:element>
  </xsl:template>

  <!--Template d'affichage du nom -->
    <xsl:template name="afficherNom">

      <xsl:param name="nom" />
      <xsl:param name="prenom" />
      <xsl:param name="adresse" />

      <xsl:element name="h1">
        <xsl:value-of select="$nom" />&#160;
        <xsl:value-of select="$prenom" />
      </xsl:element>

      <xsl:element name="em">
        <xsl:value-of select="$adresse/numero" />&#160;
        <xsl:value-of select="$adresse/voie" /><br />
        <xsl:value-of select="$adresse/codePostal" />&#160;
        <xsl:value-of select="$adresse/ville" /><br />
        <xsl:value-of select="$adresse/pays" />
      </xsl:element><br />

    </xsl:template>

    <!-- Template d'affichage des telephones -->
    <xsl:template name="afficherTelephones">
        <xsl:param name="telephones" />
        <h2>Numéros de téléphones :</h2>
        <ul>
            <xsl:for-each select="$telephones/telephone">
                <xsl:call-template name="afficherTelephone">
                    <xsl:with-param name="telephone" select="." />
                </xsl:call-template>
            </xsl:for-each>
        </ul>
    </xsl:template>
    <!-- Template d'affichage d'un telephone -->
    <xsl:template name="afficherTelephone">
        <xsl:param name="telephone" />
        <li>
            <xsl:value-of select="$telephone/@type" /> : <xsl:value-of select="$telephone" />
        </li>
    </xsl:template>

    <!-- Template d'affichage des mails -->
    <xsl:template name="afficherMails">
      <xsl:param name="emails" />
      <h2>Emails :</h2>
      <ul>
        <xsl:for-each select="$emails/email">
          <xsl:call-template name="afficherMail">
            <xsl:with-param name="email" select="." />
          </xsl:call-template>
        </xsl:for-each>
      </ul>
    </xsl:template>
    <!-- Template d'affichage d'un email -->
    <xsl:template name="afficherMail">
      <xsl:param name="email" />
      <li>
        <xsl:value-of select="$email/@type" /> : <xsl:value-of select="$email" />
      </li>
    </xsl:template>


</xsl:stylesheet>
