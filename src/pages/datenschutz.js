import React from "react";
import Seo from "../components/seo";
import Layout from "../components/Layout";
import { Box, chakra, ListItem, UnorderedList } from "@chakra-ui/react";

export default function Datenschutz({ pageContext, location }) {
  return (
    <>
      <Seo title="Datenschutz" />
      <Layout pageContext={pageContext} location={location}>
        <Box>
          <chakra.h1
            fontSize={{ base: "28", sm: "32" }}
            fontWeight="bold"
            color={"brandBlue"}
            my={8}
          >
            Datenschutzerklärung
          </chakra.h1>
          <chakra.p mb={4} fontWeight="bold" color="brandBlue">
            Allgemeiner Hinweis und Pflichtinformationen <br />
            Benennung der verantwortlichen Stelle
          </chakra.p>
          <chakra.p mb={8}>
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser
            Website ist:
          </chakra.p>
          <chakra.p mb={8}>
            YXZ GmbH
            <br />
            Max Mustermann
            <br />
            Langer Weg, 42
            <br />
            22763 Hamburg
            <br /> <br />
            Die verantwortliche Stelle entscheidet allein oder gemeinsam mit
            anderen über die Zwecke und Mittel der Verarbeitung von
            personenbezogenen Daten (z.B. Namen, Kontaktdaten o. Ä.).
          </chakra.p>
          <chakra.p mb={8}>
            <chakra.span fontWeight="bold" color="brandBlue">
              Widerruf Ihrer Einwilligung zur Datenverarbeitung
            </chakra.span>
            <br /> <br />
            Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge der
            Datenverarbeitung möglich. Ein Widerruf Ihrer bereits erteilten
            Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine
            formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum
            Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
          </chakra.p>
          <chakra.p mb={8}>
            <chakra.span fontWeight="bold" color="brandBlue">
              Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde
              <br /> <br />
            </chakra.span>
            Als Betroffener steht Ihnen im Falle eines datenschutzrechtlichen
            Verstoßes ein Beschwerderecht bei der zuständigen Aufsichtsbehörde
            zu. Zuständige Aufsichtsbehörde bezüglich datenschutzrechtlicher
            Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem
            sich der Sitz unseres Unternehmens befindet. Der folgende Link
            stellt eine Liste der Datenschutzbeauftragten sowie deren
            Kontaktdaten bereit:{" "}
            <a
              href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
              target="_blank"
              rel="noreferrer"
            >
              https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html
            </a>
            .
          </chakra.p>
          <chakra.p mb={8}>
            <chakra.span fontWeight="bold" color="brandBlue">
              Recht auf Datenübertragbarkeit
            </chakra.span>{" "}
            <br /> <br />
            Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer
            Einwilligung oder in Erfüllung eines Vertrags automatisiert
            verarbeiten, an sich oder an Dritte aushändigen zu lassen. Die
            Bereitstellung erfolgt in einem maschinenlesbaren Format. Sofern Sie
            die direkte Übertragung der Daten an einen anderen Verantwortlichen
            verlangen, erfolgt dies nur, soweit es technisch machbar ist.
          </chakra.p>
          <chakra.p mb={8}>
            <chakra.span fontWeight="bold" color="brandBlue">
              Recht auf Auskunft, Berichtigung, Sperrung, Löschung
            </chakra.span>{" "}
            <br /> <br />
            Sie haben jederzeit im Rahmen der geltenden gesetzlichen
            Bestimmungen das Recht auf unentgeltliche Auskunft über Ihre
            gespeicherten personenbezogenen Daten, Herkunft der Daten, deren
            Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf
            Berichtigung, Sperrung oder Löschung dieser Daten. Diesbezüglich und
            auch zu weiteren Fragen zum Thema personenbezogene Daten können Sie
            sich jederzeit über die im Impressum aufgeführten
            Kontaktmöglichkeiten an uns wenden.
          </chakra.p>
          <chakra.p mb={8}>
            <chakra.span fontWeight="bold" color="brandBlue">
              SSL- bzw. TLS-Verschlüsselung
            </chakra.span>{" "}
            <br /> <br />
            Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
            Inhalte, die Sie an uns als Seitenbetreiber senden, nutzt unsere
            Website eine SSL-bzw. TLS-Verschlüsselung. Damit sind Daten, die Sie
            über diese Website übermitteln, für Dritte nicht mitlesbar. Sie
            erkennen eine verschlüsselte Verbindung an der „https://“
            Adresszeile Ihres Browsers und am Schloss-Symbol in der
            Browserzeile.
          </chakra.p>
          <chakra.p mb={8}>
            <chakra.span fontWeight="bold" color="brandBlue">
              Datenschutzbeauftragter
            </chakra.span>{" "}
            <br /> <br />
            Wir haben einen Datenschutzbeauftragten bestellt.
            <br />
            <br />
            Vorname, Name
            <br />
            Straße
            <br />
            12345 Musterstadt
            <br />
            <br />
            Telefon: 01234-56789
            <br />
            E-Mail: dsb-e-mail-adresse@ihr-unternehmen.abc
          </chakra.p>
          <chakra.p>
            <chakra.span fontWeight="bold" color="brandBlue">
              Server-Log-Dateien
            </chakra.span>{" "}
            <br /> <br />
            In Server-Log-Dateien erhebt und speichert der Provider der Website
            automatisch Informationen, die Ihr Browser automatisch an uns
            übermittelt. Dies sind:{" "}
          </chakra.p>
          <UnorderedList my={4}>
            <ListItem>Besuchte Seite auf unserer Domain</ListItem>
            <ListItem>Datum und Uhrzeit der Serveranfrage</ListItem>
            <ListItem>Browsertyp und Browserversion</ListItem>
            <ListItem>Verwendetes Betriebssystem</ListItem>
            <ListItem>Referrer URL</ListItem>
            <ListItem>Hostname des zugreifenden Rechners</ListItem>
            <ListItem>IP-Adresse</ListItem>
          </UnorderedList>
          <chakra.p mb={8}>
            Es findet keine Zusammenführung dieser Daten mit anderen
            Datenquellen statt. Grundlage der Datenverarbeitung bildet Art. 6
            Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung
            eines Vertrags oder vorvertraglicher Maßnahmen gestattet.
          </chakra.p>
          <chakra.p mb={8}>
            <chakra.span fontWeight="bold" color="brandBlue">
              Kontaktformular
            </chakra.span>{" "}
            <br /> <br />
            Per Kontaktformular übermittelte Daten werden einschließlich Ihrer
            Kontaktdaten gespeichert, um Ihre Anfrage bearbeiten zu können oder
            um für Anschlussfragen bereitzustehen. Eine Weitergabe dieser Daten
            findet ohne Ihre Einwilligung nicht statt. <br /> <br />
            Die Verarbeitung der in das Kontaktformular eingegebenen Daten
            erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs.
            1 lit. a DSGVO). Ein Widerruf Ihrer bereits erteilten Einwilligung
            ist jederzeit möglich. Für den Widerruf genügt eine formlose
            Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf
            erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.{" "}
            <br /> <br />
            Über das Kontaktformular übermittelte Daten verbleiben bei uns, bis
            Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung
            widerrufen oder keine Notwendigkeit der Datenspeicherung mehr
            besteht. Zwingende gesetzliche Bestimmungen - insbesondere
            Aufbewahrungsfristen - bleiben unberührt.
          </chakra.p>

          <chakra.p mb={8}>
            <chakra.span fontWeight="bold" color="brandBlue">
              Google Analytics
            </chakra.span>{" "}
            <br /> <br />
            Unsere Website verwendet Funktionen des Webanalysedienstes Google
            Analytics. Anbieter des Webanalysedienstes ist die Google Inc., 1600
            Amphitheatre Parkway, Mountain View, CA 94043, USA.
            <br /> <br />
            Google Analytics verwendet "Cookies." Das sind kleine Textdateien,
            die Ihr Webbrowser auf Ihrem Endgerät speichert und eine Analyse der
            Website-Benutzung ermöglichen. Mittels Cookie erzeugte Informationen
            über Ihre Benutzung unserer Website werden an einen Server von
            Google übermittelt und dort gespeichert. Server-Standort ist im
            Regelfall die USA.
            <br /> <br />
            Das Setzen von Google-Analytics-Cookies erfolgt auf Grundlage von
            Art. 6 Abs. 1 lit. f DSGVO. Als Betreiber dieser Website haben wir
            &nbsp;ein berechtigtes Interesse an der Analyse des
            Nutzerverhaltens, um unser Webangebot und ggf. auch Werbung zu
            optimieren.
            <br /> <br />
            <i>IP-Anonymisierung</i>
            <br /> <br />
            Wir setzen Google Analytics in Verbindung mit der Funktion
            IP-Anonymisierung ein. Sie gewährleistet, dass Google Ihre
            IP-Adresse innerhalb von Mitgliedstaaten der Europäischen Union oder
            in anderen Vertragsstaaten des Abkommens über den Europäischen
            Wirtschaftsraum vor der Übermittlung in die USA kürzt. Es kann
            Ausnahmefälle geben, in denen Google die volle IP-Adresse an einen
            Server in den USA überträgt und dort kürzt. In unserem Auftrag wird
            Google diese Informationen benutzen, um Ihre Nutzung der Website
            auszuwerten, um Reports über Websiteaktivitäten zu erstellen und um
            weitere mit der Websitenutzung und der Internetnutzung verbundene
            Dienstleistungen gegenüber uns zu erbringen. Es findet keine
            Zusammenführung der von Google Analytics übermittelten IP-Adresse
            mit anderen Daten von Google statt.
            <br />
            <br />
            <i>Browser Plugin </i>
            <br />
            <br />
            Das Setzen von Cookies durch Ihren Webbrowser ist verhinderbar.
            Einige Funktionen unserer Website könnten dadurch jedoch
            eingeschränkt werden. Ebenso können Sie die Erfassung von Daten
            bezüglich Ihrer Website-Nutzung einschließlich Ihrer IP-Adresse
            mitsamt anschließender Verarbeitung durch Google unterbinden. Dies
            ist möglich, indem Sie das über folgenden Link erreichbare
            Browser-Plugin herunterladen und installieren:{" "}
            <a href="https://tools.google.com/dlpage/gaoptout?hl=de">
              https://tools.google.com/dlpage/gaoptout?hl=de
            </a>
            .
            <br /> <br />
            <i>Widerspruch gegen die Datenerfassung </i>
            <br />
            <br />
            Sie können die Erfassung Ihrer Daten durch Google Analytics
            verhindern, indem Sie auf folgenden Link klicken. Es wird ein
            Opt-Out-Cookie gesetzt, der die Erfassung Ihrer Daten bei
            zukünftigen Besuchen unserer Website verhindert: Google Analytics
            deaktivieren.
            <br /> <br />
            Einzelheiten zum Umgang mit Nutzerdaten bei Google Analytics finden
            Sie in der Datenschutzerklärung von Google:{" "}
            <a href="https://support.google.com/analytics/answer/6004245?hl=de">
              https://support.google.com/analytics/answer/6004245?hl=de
            </a>
            <br /> <br />
            <i>Auftragsverarbeitung </i>
            <br /> <br />
            Zur vollständigen Erfüllung der gesetzlichen Datenschutzvorgaben
            haben wir mit Google einen Vertrag über die Auftragsverarbeitung
            abgeschlossen.
            <br /> <br />
            <i> Demografische Merkmale bei Google Analytics </i>
            <br /> <br />
            Unsere Website verwendet die Funktion “demografische Merkmale” von
            Google Analytics. Mit ihr lassen sich Berichte erstellen, die
            Aussagen zu Alter, Geschlecht und Interessen der Seitenbesucher
            enthalten. Diese Daten stammen aus interessenbezogener Werbung von
            Google sowie aus Besucherdaten von Drittanbietern. Eine Zuordnung
            der Daten zu einer bestimmten Person ist nicht möglich. Sie können
            diese Funktion jederzeit deaktivieren. Dies ist über die
            Anzeigeneinstellungen in Ihrem Google-Konto möglich oder indem Sie
            die Erfassung Ihrer Daten durch Google Analytics, wie im Punkt
            “Widerspruch gegen die Datenerfassung” erläutert, generell
            untersagen.
          </chakra.p>
        </Box>
      </Layout>
    </>
  );
}
